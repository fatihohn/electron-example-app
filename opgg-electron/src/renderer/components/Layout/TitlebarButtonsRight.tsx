import TitlebarButton from './TitlebarButton';
import CloseIcon from '../../../img/icon-close.svg';
import MaximizeIcon from '../../../img/icon-maximize.svg';
import MinimizeIcon from '../../../img/icon-minimize.svg';

export default function TitlebarButtonsLeft() {
  return (
    <div className="flex items-center text-center">
      <TitlebarButton message="minimizeApp">
        <img src={MinimizeIcon} alt="minimize" />
      </TitlebarButton>

      <TitlebarButton message="maximizeApp">
        <img src={MaximizeIcon} alt="maximize" />
      </TitlebarButton>

      <TitlebarButton message="closeApp">
        <img src={CloseIcon} alt="close" />
      </TitlebarButton>
    </div>
  );
}

