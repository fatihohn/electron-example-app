/* eslint-disable no-unused-vars */
// import { ElectronHandler } from 'main/preload';
import { Channels } from 'main/preload';

// declare global {
//   // eslint-disable-next-line no-unused-vars
//   interface Window {
//     electron: ElectronHandler;
//   }
// }

declare global {
  interface Window {
    electron: {
      isMac: boolean;
      ipcRenderer: {
        sendMessage(channel: Channels, args: unknown[]): void;
        on(
          channel: string,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: string, func: (...args: unknown[]) => void): void;
      };
    };
  }
}

export {};
