/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGame } from 'renderer/context/game';

type Interval = typeof global.setInterval | string | number | null | undefined;

export default function Valorant() {
  const navigate = useNavigate();
  const location = useLocation();

  // eslint-disable-next-line prettier/prettier
  const [isNavIntent, setIsNavIntent] = useState(location?.state?.isNavIntent);
  const {
    isLolRunning,
    isValorantRunning,
    setIsLolRunning,
    setIsValorantRunning,
  } = useGame();

  let gameCheckInterval: Interval = null;

  const recursiveCheck = () => {
    if (location.pathname !== '/valorant') return;
    if (gameCheckInterval) clearInterval(gameCheckInterval);

    gameCheckInterval = setInterval(() => {
      console.log(`${location.pathname} ${Date.now()} - Checking games`);
      window.electron.ipcRenderer.sendMessage(`gameCheck`, [`gameCheck`]);
    }, 1000);
  };

  useEffect(() => {
    // CHECK GAME STATUS
    recursiveCheck();

    // SET GAME STATUS
    window.electron.ipcRenderer.on('lolRunning', () => {
      if (!isLolRunning) {
        setIsNavIntent(false);
      }
      setIsLolRunning(true);
    });
    window.electron.ipcRenderer.on('lolStopped', () => {
      if (isLolRunning) {
        setIsNavIntent(false);
      }
      setIsLolRunning(false);
    });
    window.electron.ipcRenderer.on('valorantRunning', () => {
      setIsValorantRunning(true);
    });
    window.electron.ipcRenderer.on('valorantStopped', () => {
      setIsValorantRunning(false);
    });

    return () => {
      if (gameCheckInterval) clearInterval(gameCheckInterval);
    };
  }, []);

  if (isLolRunning && !isNavIntent) {
    navigate('/lol', {
      state: {
        isNavIntent: false,
      },
    });
  }

  return <div>Valorant: {isValorantRunning ? 'On' : 'Off'}</div>;
}
