import { ReactNode } from 'react';

import SideMenu from './SideMenu';
import Titlebar from './Titlebar';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="wrap-all">
      <Titlebar />

      <div className="wrap-content">
        <div className="box-side">
          <SideMenu />
        </div>

        <div className="wrap-board">
          <div className="box-board">{children}</div>
        </div>
      </div>
    </div>
  );
}
