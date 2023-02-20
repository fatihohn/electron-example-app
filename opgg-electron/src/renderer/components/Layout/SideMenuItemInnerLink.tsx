import { ReactNode, Component } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

type SideMenuItemInnerLinkProps = {
  children: ReactNode | Component;
  to: string;
} & NavLinkProps;

export default function SideMenuItemInnerLink(
  props: SideMenuItemInnerLinkProps
) {
  const { children } = props;
  return <NavLink {...props}>{children}</NavLink>;
}
