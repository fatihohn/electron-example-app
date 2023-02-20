/* eslint-disable no-unused-vars */
import { createContext, useContext } from 'react';

export const GameContext = createContext({
  isLolRunning: false,
  isValorantRunning: false,
  setIsLolRunning: (state: boolean) => {},
  setIsValorantRunning: (state: boolean) => {},
});

export const useGame = () => useContext(GameContext);
