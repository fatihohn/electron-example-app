/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import TitlebarButtonsLeft from './TitlebarButtonsLeft';
import TitlebarButtonsRight from './TitlebarButtonsRight';

export default function Titlebar() {
  return (
    <div
    // draggable
    // as="nav"
    // h="40px"
    // alignItems="center"
    // justifyContent="space-between"
    // bg="neutral.25"
    // _dark={{ bg: 'base.dark' }}
    // sx={{ '-webkit-app-region': 'drag' }}
    >
      {/* LEFT SIDE */}
      <TitlebarButtonsLeft />

      {/* RIGHT SIDE */}
      <TitlebarButtonsRight />
    </div>
  );
}
