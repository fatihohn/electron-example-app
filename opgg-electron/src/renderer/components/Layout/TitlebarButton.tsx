import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

type TitlebarButtonProps = {
  message: 'minimizeApp' | 'maximizeApp' | 'closeApp' | 'refreshApp';
} & ButtonProps;

export default function TitlebarButton({
  message,
  children,
  ...props
}: TitlebarButtonProps) {
  return (
    <button
      type="button"
      // display="flex"
      // justifyContent="center"
      // alignItems="center"
      onClick={() => {
        window.electron.ipcRenderer.sendMessage(message, [message]);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
