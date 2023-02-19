/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { Component, HTMLAttributes, PropsWithChildren } from 'react';
import TitlebarButtonsLeft from './TitlebarButtonsLeft';
import TitlebarButtonsRight from './TitlebarButtonsRight';

interface DivProps extends HTMLAttributes<HTMLDivElement> {}

// export default function Titlebar() {
//   return (
//     <div className="wrap-titlebar titlebar w-screen h-[36px] flex justify-between items-center absolute top-0 left-0 bg-[#0c0f13] px-[10px]">
//       {/* LEFT SIDE */}
//       <TitlebarButtonsLeft />

//       {/* RIGHT SIDE */}
//       <TitlebarButtonsRight />
//     </div>
//   );
// }

export default class Titlebar extends Component {
  constructor(props: PropsWithChildren<DivProps>) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrap-titlebar titlebar w-screen h-[36px] flex justify-between items-center top-0 left-0 bg-[#0c0f13] px-[10px]">
        {/* LEFT SIDE */}
        <TitlebarButtonsLeft />

        {/* RIGHT SIDE */}
        <TitlebarButtonsRight />
      </div>
    );
  }
}
