/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, shell, ipcMain, net } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import Valorant from '@liamcottle/valorant.js';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';

class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

ipcMain.on('app-version', async (event) => {
  event.reply('app-version', app.getVersion());
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    autoHideMenuBar: true,
    frame: false,
    width: 1440,
    height: 720,
    icon: getAssetPath('icon.svg'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  mainWindow.webContents.on(
    'new-window',
    (event: { preventDefault: () => void }, url: string) => {
      event.preventDefault();
      shell.openExternal(url);
    }
  );

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.commandLine.appendSwitch('ignore-certificate-errors');
app.commandLine.appendSwitch('allow-insecure-localhost', 'true');
app
  .whenReady()
  .then(() => {
    createWindow();

    ipcMain.on('minimizeApp', () => {
      mainWindow?.minimize();
    });
    ipcMain.on('maximizeApp', () => {
      if (mainWindow?.isMaximized()) {
        mainWindow?.unmaximize();
      } else {
        mainWindow?.maximize();
      }
    });
    ipcMain.on('closeApp', () => {
      mainWindow?.close();
    });
    ipcMain.on('reloadApp', () => {
      mainWindow?.reload();
    });
    ipcMain.on('gameCheck', () => {
      try {
        // MAC
        if (process.platform === 'darwin') {
          const request = net.request(
            'https://127.0.0.1:2999/liveclientdata/gamestats'
          );
          request.on('response', (response) => {
            console.log(`STATUS: ${response.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
            response.on('data', (chunk) => {
              console.log(`BODY: ${chunk}`);
              if (typeof chunk === 'object') {
                mainWindow?.webContents.send('lolRunning', chunk.toString());
              }
            });
            response.on('end', () => {
              console.log('No more data in response.');
            });
          });
          request.on('error', (error) => {
            mainWindow?.webContents.send('lolStopped');
            console.log(error);
          });
          request.end();
        }
        // WINDOWS
        else {
          type game = {
            name: string;
            alias: string;
          };
          const games: game[] = [
            { name: 'valorant', alias: 'valorant' },
            { name: 'league_of_legends', alias: 'lol' },
          ];
          const client = Valorant.LocalRiotClientAPI.initFromLockFile();

          if (!client) return;
          const { ip, port, username, password } = client;
          const uri = `https://${ip}:${port}/chat/v4/presences`;
          const request = net.request(uri);
          request.on('response', (response) => {
            response.on('data', (chunk) => {
              const str = chunk.toString();
              const obj = JSON.parse(str);
              const { presences } = obj;
              const products =
                presences?.map((item: { product: any }) => item.product) ?? [];

              games.forEach((item) => {
                if (products.includes(item.name)) {
                  mainWindow?.webContents.send(`${item.alias}Running`);
                } else {
                  mainWindow?.webContents.send(`${item.alias}Stopped`);
                }
              });
            });
            response.on('end', () => {
              console.log('No more data in response.');
            });
          });
          request.on('login', (_authInfo, callback) => {
            callback(username, password);
          });
          request.on('error', (error) => {
            mainWindow?.webContents.send('valorantStopped');
            mainWindow?.webContents.send('lolStopped');
            console.log(error);
          });
          request.end();
        }
      } catch (e) {
        mainWindow?.webContents.send('valorantStopped');
        mainWindow?.webContents.send('lolStopped');
        console.log(e);
      }
    });

    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);
