import { ReactNode, Component, PropsWithChildren, HTMLAttributes } from 'react';
import SideMenu from './SideMenu';
import Titlebar from './Titlebar';

interface DivProps extends HTMLAttributes<HTMLDivElement> {}

type LayoutProps = {
  children: ReactNode;
} & DivProps;

// export default function Layout({ children }: LayoutProps) {
//   return (
//     <div className="wrap-all flex flex-col w-screen h-auto top-0 left-0">
//       <Titlebar />

//       <div className="w-screen h-full flex flex-row">
//         <SideMenu />
//         <div className="box-board border-t border-[#202530] grow">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

export default class Layout extends Component<LayoutProps> {
  constructor(props: PropsWithChildren<LayoutProps>) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <div className="wrap-all flex flex-col w-screen h-auto top-0 left-0">
        <Titlebar />
        <div className="w-screen h-[calc(100vh-36px)] top-0 flex flex-row">
          <SideMenu />
          <div className="box-board border-t border-[#202530] grow">
            {children}
          </div>
        </div>
      </div>
    );
  }
}
