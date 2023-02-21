import VerticalStackItem from './VerticalStackItem';
import SideMenuItemButton from './SideMenuItemButton';
import SideMenuItemInnerLink from './SideMenuItemInnerLink';
import LeagueoflegendsIcon from '../../../img/icon-leagueoflegends.svg';
import ValorantIcon from '../../../img/icon-valorant.svg';
import OpggIcon from '../../../img/icon-opgg.svg';
import { HIGHLIGHT_COLOR, OP_GG_LINK } from '../../const';

export default function SideMenu() {
  const inactiveLinkClassName = 'inactive-btn';

  const activeLinkClassName = `
    active-btn
    after:content-['']
    after:text-[#000]
    after:w-[4px]
    after:h-[24px]
    after:rounded-l-[8px]
    after:bg-[#000]
    after:absolute
    after:right-[-17px]
    after:top-0
    after:z-0
    after:ml-[14px]
  `;

  return (
    <div className="box-side-menu flex-1 max-w-[60px] w-[60px] border-r border-[#202530]">
      <div className="box-vertical-stack flex flex-col gap-[24px]">
        <VerticalStackItem
          style={{
            backgroundColor: HIGHLIGHT_COLOR,
          }}
        >
          <SideMenuItemButton
            onClick={() => {
              window.open(OP_GG_LINK, '_blank');
            }}
          >
            <img src={OpggIcon} alt="op.gg" />
          </SideMenuItemButton>
        </VerticalStackItem>

        <VerticalStackItem>
          <SideMenuItemInnerLink
            to="/lol"
            state={{ isNavIntent: true }}
            className={({ isActive }) =>
              isActive ? activeLinkClassName : inactiveLinkClassName
            }
          >
            <img src={LeagueoflegendsIcon} alt="league of legends" />
          </SideMenuItemInnerLink>
        </VerticalStackItem>

        <VerticalStackItem>
          <SideMenuItemInnerLink
            to="/valorant"
            state={{ isNavIntent: true }}
            className={({ isActive }) =>
              isActive ? activeLinkClassName : inactiveLinkClassName
            }
          >
            <img src={ValorantIcon} alt="valorant" />
          </SideMenuItemInnerLink>
        </VerticalStackItem>
      </div>
    </div>
  );
}
