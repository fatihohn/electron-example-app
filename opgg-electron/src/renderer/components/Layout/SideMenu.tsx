import LeagueoflegendsIcon from '../../../img/icon-leagueoflegends.svg';
import ValorantIcon from '../../../img/icon-valorant.svg';
import OpggIcon from '../../../img/icon-opgg.svg';

import { SideMenuItemButton, SideMenuItemInnerLink } from './SideMenuItems';

// type SideMenuProps = {
//   openLoginModal: () => void;
// };

// TODO. useState -> activeTab

// const logoStyles: IconProps = {
//   width: '32px',
//   height: '32px',
//   viewBox: '0 0 32 32',
//   fill: 'none',
//   xmlns: 'http://www.w3.org/2000/svg',
// };

// const iconStyles: IconProps = {
//   width: '24px',
//   height: '24px',
//   viewBox: '0 0 24 24',
//   fill: 'none',
//   xmlns: 'http://www.w3.org/2000/svg',
// };

// const hoverStyles: IconProps = {
//   position: 'absolute',
//   opacity: 0,
//   transition: 'ease-in-out',
//   transitionDuration: '100ms',
//   _groupHover: { opacity: 1 },
// };

function openOpggWithDefaultBrowser() {
  // TODO. open https://op.gg with OS default browser
  // eslint-disable-next-line no-alert
  alert('https://op.gg');
  return null;
}
export default function SideMenu() {
  return (
    <div className="box-side-menu">
      <div className="box-vertical-stack">
        <div className="box-vertical-stack-item">
          <SideMenuItemButton onClick={openOpggWithDefaultBrowser}>
            <img src={OpggIcon} alt="op.gg" />
          </SideMenuItemButton>
        </div>

        <div className="box-vertical-stack-item">
          <SideMenuItemInnerLink to="/lol">
            <img src={LeagueoflegendsIcon} alt="league of legends" />
          </SideMenuItemInnerLink>
        </div>
        <div className="box-vertical-stack-item">
          <SideMenuItemInnerLink to="/valorant">
            <img src={ValorantIcon} alt="valorant" />
          </SideMenuItemInnerLink>
        </div>
      </div>
    </div>
  );
}
