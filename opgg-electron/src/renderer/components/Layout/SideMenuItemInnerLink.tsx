import { Component, PropsWithChildren, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type SideMenuItemProps = {
  children: ReactNode;
};

type SideMenuItemInnerLinkProps = SideMenuItemProps & {
  to: string;
};

// TODO. button style
// TODO. link style
// TODO. active style
// TODO. hover style

// export function SideMenuItemInnerLink({
//   to,
//   children,
//   ...props
// }: SideMenuItemInnerLinkProps) {
//   return (
//     <NavLink to={to} {...props}>
//       {children}
//     </NavLink>
//   );
// }

export default class SideMenuItemInnerLink extends Component<SideMenuItemInnerLinkProps> {
  constructor(props: PropsWithChildren<SideMenuItemInnerLinkProps>) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return <NavLink {...this.props}>{children}</NavLink>;
  }
}
