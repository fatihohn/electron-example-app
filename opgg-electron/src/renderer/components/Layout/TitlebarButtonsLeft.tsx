import TitlebarButton from './TitlebarButton';
import ReloadIcon from '../../../img/icon-reload.svg';

export default function TitlebarButtonsLeft() {
  return (
    <div className="box-title-left flex items-center justify-center w-[65px]">
      <TitlebarButton
        message="reloadApp"
        className="flex flex-row gap-[2px] items-center"
      >
        <img src={ReloadIcon} alt="reload" />
        <span className="text-[12px] text-[#8892a1]">리로딩</span>
      </TitlebarButton>
    </div>
  );
}
