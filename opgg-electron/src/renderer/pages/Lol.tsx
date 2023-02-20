/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGame } from 'renderer/context/game';

type Interval = typeof global.setInterval | string | number | null | undefined;

export default function Lol() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavIntent, setIsNavIntent] = useState(location?.state?.isNavIntent);
  const {
    isLolRunning,
    isValorantRunning,
    setIsLolRunning,
    setIsValorantRunning,
  } = useGame();

  let lolCheckInterval: Interval = null;
  let valorantCheckInterval: Interval = null;

  const recursiveCheck = () => {
    if (location.pathname !== '/lol') return;
    if (lolCheckInterval) clearInterval(lolCheckInterval);
    if (valorantCheckInterval) clearInterval(valorantCheckInterval);

    lolCheckInterval = setInterval(() => {
      console.log(`${location.pathname} ${Date.now()} - Checking lol`);
      window.electron.ipcRenderer.sendMessage(`lolCheck`, [`lolCheck`]);
    }, 1000);
    valorantCheckInterval = setInterval(() => {
      console.log(`${location.pathname} ${Date.now()} - Checking valorant`);
      window.electron.ipcRenderer.sendMessage(`valorantCheck`, [
        `valorantCheck`,
      ]);
    }, 1000);
  };

  useEffect(() => {
    // CHECK GAME STATUS
    recursiveCheck();

    // SET GAME STATUS
    window.electron.ipcRenderer.on('lolRunning', () => {
      setIsLolRunning(true);
    });
    window.electron.ipcRenderer.on('lolStopped', () => {
      setIsLolRunning(false);
    });
    window.electron.ipcRenderer.on('valorantRunning', () => {
      if (!isValorantRunning) {
        setIsNavIntent(false);
      }
      setIsValorantRunning(true);
    });
    window.electron.ipcRenderer.on('valorantStopped', () => {
      if (isValorantRunning) {
        setIsNavIntent(false);
      }
      setIsValorantRunning(false);
    });

    return () => {
      console.log('unmount');
      if (lolCheckInterval) clearInterval(lolCheckInterval);
      if (valorantCheckInterval) clearInterval(valorantCheckInterval);
    };
  }, []);

  if (isValorantRunning && !isNavIntent) {
    navigate('/valorant', {
      state: {
        isNavIntent: false,
      },
    });
  }

  return <div>League of Legends: {isLolRunning ? 'On' : 'Off'}</div>;
}
