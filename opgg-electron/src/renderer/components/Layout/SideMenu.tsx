import { Component, HTMLAttributes } from 'react';
import VerticalStackItem from './VerticalStackItem';
import SideMenuItemButton from './SideMenuItemButton';
import SideMenuItemInnerLink from './SideMenuItemInnerLink';
import LeagueoflegendsIcon from '../../../img/icon-leagueoflegends.svg';
import ValorantIcon from '../../../img/icon-valorant.svg';
import OpggIcon from '../../../img/icon-opgg.svg';

interface DivProps extends HTMLAttributes<HTMLDivElement> {}

export default class SideMenu extends Component<DivProps> {
  inactiveLinkClassName = 'inactive-btn';

  activeLinkClassName = `active-btn after:content-[''] after:text-[#000] after:w-[4px] after:h-[24px] after:rounded-l-[8px] after:bg-[#000] after:absolute after:right-[-17px] after:top-0 after:z-0 after:ml-[14px]`;

  render() {
    return (
      <div className="box-side-menu flex-1 max-w-[60px] w-[60px] border-r border-[#202530]">
        <div className="box-vertical-stack flex flex-col gap-[24px]">
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
            <SideMenuItemInnerLink
              to="/lol"
              className={({ isActive }) =>
                isActive ? this.activeLinkClassName : this.inactiveLinkClassName
              }
            >
              <img src={LeagueoflegendsIcon} alt="league of legends" />
            </SideMenuItemInnerLink>
          </VerticalStackItem>

          <VerticalStackItem>
            <SideMenuItemInnerLink
              to="/valorant"
              className={({ isActive }) =>
                isActive ? this.activeLinkClassName : this.inactiveLinkClassName
              }
            >
              <img src={ValorantIcon} alt="valorant" />
            </SideMenuItemInnerLink>
          </VerticalStackItem>
        </div>
      </div>
    );
  }
}
