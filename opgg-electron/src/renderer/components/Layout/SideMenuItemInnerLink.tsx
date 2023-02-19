import { Component, PropsWithChildren, ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import ActiveIndicator from './ActiveIndicator';

type SideMenuItemInnerLinkProps = {
  children: ReactNode;
  to: string;
} & NavLinkProps;

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
    return (
      <NavLink {...this.props}>{children}</NavLink>
      // <NavLink {...this.props}}>{children}</NavLink>
      // <NavLink {...this.props}>{children}</NavLink>
    );
  }
}
