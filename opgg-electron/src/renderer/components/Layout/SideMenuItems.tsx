import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type SideMenuItemProps = {
  children: ReactNode;
};

type SideMenuItemInnerLinkProps = SideMenuItemProps & {
  to: string;
};

type SideMenuItemButtonProps = SideMenuItemProps & {
  onClick: () => void;
};

// TODO. button style
// TODO. link style
// TODO. active style
// TODO. hover style

export function SideMenuItemInnerLink({
  to,
  children,
  ...props
}: SideMenuItemInnerLinkProps) {
  return (
    <NavLink to={to} {...props}>
      {children}
    </NavLink>
  );
}

export function SideMenuItemButton({
  onClick,
  children,
  ...props
}: SideMenuItemButtonProps) {
  return (
    <button type="button" onClick={onClick} {...props}>
      {children}
    </button>
  );
}
