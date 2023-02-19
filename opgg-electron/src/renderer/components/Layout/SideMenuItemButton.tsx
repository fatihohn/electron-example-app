import { Component, PropsWithChildren, ReactNode } from 'react';

type SideMenuItemProps = {
  children: ReactNode;
};

type SideMenuItemButtonProps = SideMenuItemProps & {
  onClick: () => void;
};

// export function SideMenuItemButton({
//   onClick,
//   children,
//   ...props
// }: SideMenuItemButtonProps) {
//   return (
//     <button type="button" onClick={onClick} {...props}>
//       {children}
//     </button>
//   );
// }

export default class SideMenuItemButton extends Component<SideMenuItemButtonProps> {
  constructor(props: PropsWithChildren<SideMenuItemButtonProps>) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <button type="button" {...this.props}>
        {children}
      </button>
    );
  }
}
