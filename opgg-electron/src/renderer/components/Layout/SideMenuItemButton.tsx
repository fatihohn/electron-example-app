import { ReactNode } from 'react';

type SideMenuItemProps = {
  children: ReactNode;
};

type SideMenuItemButtonProps = SideMenuItemProps & {
  onClick: () => void;
};

export default function SideMenuItemButton(props: SideMenuItemButtonProps) {
  const { children } = props;
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}
