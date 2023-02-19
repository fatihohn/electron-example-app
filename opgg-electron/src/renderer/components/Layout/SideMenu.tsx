import { Component, HTMLAttributes } from 'react';
import VerticalStackItem from './VerticalStackItem';
import SideMenuItemButton from './SideMenuItemButton';
import SideMenuItemInnerLink from './SideMenuItemInnerLink';
import LeagueoflegendsIcon from '../../../img/icon-leagueoflegends.svg';
import ValorantIcon from '../../../img/icon-valorant.svg';
import OpggIcon from '../../../img/icon-opgg.svg';

interface DivProps extends HTMLAttributes<HTMLDivElement> {}

export default class SideMenu extends Component<DivProps> {
  render() {
    return (
      <div className="box-side-menu flex-1 w-[60px]">
        <div className="box-vertical-stack">
          <VerticalStackItem
            style={{
              backgroundColor: '#6c61ff',
            }}
          >
            <SideMenuItemButton
              onClick={() => {
                // TODO. open https://op.gg with OS default browser
                // eslint-disable-next-line no-alert
                alert('https://op.gg');
              }}
            >
              <img src={OpggIcon} alt="op.gg" />
            </SideMenuItemButton>
          </VerticalStackItem>

          <VerticalStackItem>
            <SideMenuItemInnerLink to="/lol">
              <img src={LeagueoflegendsIcon} alt="league of legends" />
            </SideMenuItemInnerLink>
          </VerticalStackItem>

          <VerticalStackItem>
            <SideMenuItemInnerLink to="/valorant">
              <img src={ValorantIcon} alt="valorant" />
            </SideMenuItemInnerLink>
          </VerticalStackItem>
        </div>
      </div>
    );
  }
}
