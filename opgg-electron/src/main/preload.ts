import { contextBridge, ipcRenderer, IpcRendererEvent, net } from 'electron';

export type Channels =
  | 'ipc-example'
  | 'app-version'
  | 'minimizeApp'
  | 'maximizeApp'
  | 'reloadApp'
  | 'closeApp'
  | 'gameCheck'
  | 'lolStopped'
  | 'lolRunning'
  | 'valorantStopped'
  | 'valorantRunning';

contextBridge.exposeInMainWorld('electron', {
  isMac: process.platform === 'darwin',
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => ipcRenderer.removeListener(channel, subscription);
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
  handleCounter: (callback: any) => ipcRenderer.on('update-counter', callback),
});
