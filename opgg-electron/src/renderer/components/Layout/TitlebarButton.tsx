import { ButtonHTMLAttributes, ReactNode, Component } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

type TitlebarButtonProps = {
  message: 'minimizeApp' | 'maximizeApp' | 'closeApp' | 'reloadApp';
  children: ReactNode | Component;
} & ButtonProps;

export default function TitlebarButton(props: TitlebarButtonProps) {
  const { children, message } = props;
  return (
    <button
      type="button"
      className="flex justify-center items-center w-[24px] h-[24px]"
      onClick={() => {
        window.electron.ipcRenderer.sendMessage(message, [message]);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
