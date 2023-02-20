import TitlebarButtonsLeft from './TitlebarButtonsLeft';
import TitlebarButtonsRight from './TitlebarButtonsRight';

export default function Titlebar() {
  return (
    <div className="wrap-titlebar titlebar w-screen h-[36px] flex justify-between items-center top-0 left-0 bg-[#0c0f13] px-[10px] border-b border-[#202530]">
      {/* LEFT SIDE */}
      <TitlebarButtonsLeft />

      {/* RIGHT SIDE */}
      <TitlebarButtonsRight />
    </div>
  );
}
