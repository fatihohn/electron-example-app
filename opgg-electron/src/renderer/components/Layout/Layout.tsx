import { ReactNode, Component, HTMLAttributes } from 'react';
import SideMenu from './SideMenu';
import Titlebar from './Titlebar';

interface DivProps extends HTMLAttributes<HTMLDivElement> {}

type LayoutProps = {
  children: ReactNode | Component;
} & DivProps;

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="wrap-all flex flex-col w-screen h-auto top-0 left-0">
      <Titlebar />
      <div className="w-screen h-[calc(100vh-36px)] top-0 flex flex-row">
        <SideMenu />
        <div className="box-board grow z-10 p-4 text-[26px] font-bold not-italic text-white">
          {children}
        </div>
      </div>
    </div>
  );
}
