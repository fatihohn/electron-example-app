/* eslint-disable no-unused-vars */
import { createContext, useContext } from 'react';

// type GameContextProps = {
//   isLolRunning: boolean;
//   isValorantRunning: boolean;
//   setIsLolRunning: Dispatch<SetStateAction<boolean>> | null | undefined;
//   setIsValorantRunning: Dispatch<SetStateAction<boolean>> | null | undefined;
// };

export const GameContext = createContext({
  isLolRunning: false,
  isValorantRunning: false,
  setIsLolRunning: (state: boolean) => {},
  setIsValorantRunning: (state: boolean) => {},
});

export const useGame = () => useContext(GameContext);
