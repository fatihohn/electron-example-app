import { Component, PropsWithChildren, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

type TitlebarButtonProps = {
  message: 'minimizeApp' | 'maximizeApp' | 'closeApp' | 'reloadApp';
} & ButtonProps;

// export default function TitlebarButton({
//   message,
//   children,
//   ...props
// }: TitlebarButtonProps) {
//   return (
//     <button
//       type="button"
//       className="flex justify-center items-center w-[24px] h-[24px]"
//       // display="flex"
//       // justifyContent="center"
//       // alignItems="center"
//       onClick={() => {
//         window.electron.ipcRenderer.sendMessage(message, [message]);
//       }}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }

export default class TitlebarButton extends Component<TitlebarButtonProps> {
  constructor(props: PropsWithChildren<TitlebarButtonProps>) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, message } = this.props;
    return (
      <button
        type="button"
        className="flex justify-center items-center w-[24px] h-[24px]"
        // display="flex"
        // justifyContent="center"
        // alignItems="center"
        onClick={() => {
          window.electron.ipcRenderer.sendMessage(message, [message]);
        }}
        {...this.props}
      >
        {children}
      </button>
    );
  }
}
