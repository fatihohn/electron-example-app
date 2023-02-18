import TitlebarButton from './TitlebarButton';
import RefreshIcon from '../../../img/icon-refresh.svg';
import MaximizeIcon from '../../../img/icon-maximize.svg';
import MinimizeIcon from '../../../img/icon-minimize.svg';
// import RefreshIcon from '../../../../assets/icon-refresh.svg';

export default function TitlebarActionsLeft() {
  return (
    <div className="box-title-left">
      <TitlebarButton message="refreshApp">
        <img src={RefreshIcon} alt="refresh" />
      </TitlebarButton>
    </div>
  );
}
