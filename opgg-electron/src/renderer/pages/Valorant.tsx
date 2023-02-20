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

  let lolCheckInterval: Interval = null;
  let valorantCheckInterval: Interval = null;

  const recursiveCheck = () => {
    if (location.pathname !== '/valorant') return;
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
      console.log('unmount');
      if (lolCheckInterval) clearInterval(lolCheckInterval);
      if (valorantCheckInterval) clearInterval(valorantCheckInterval);
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

/**
 * running games case
 * 1. NONE
 *  - side menu tab switch: true
 *  - auto switch to lol: true
 *  - auto switch to valorant: true
 * 2. LOL
 *  - side menu tab switch: true
 *  - auto switch to lol: false
 *    => on lol restart: true
 *  - auto switch to valorant: true
 * 3. VALORANT
 *  - side menu tab switch: true
 *  - auto switch to lol: true
 *  - auto switch to valorant: false
 *    => on valorant restart: true
 * 4. LOL & VALORANT
 *  - side menu tab switch: true
 *  - auto switch to lol: false
 *  - auto switch to valorant: false
 *    => on valorant restart: true
 */
