import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from 'renderer/context/game';

export default function Main() {
  const navigate = useNavigate();
  const {
    isLolRunning,
    isValorantRunning,
    setIsLolRunning,
    setIsValorantRunning,
  } = useGame();

  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('gameCheck', ['gameCheck']);
    window.electron.ipcRenderer.on('lolRunning', () => {
      setIsLolRunning(true);
    });
    window.electron.ipcRenderer.on('valorantRunning', () => {
      setIsValorantRunning(true);
    });

    if (isValorantRunning) {
      navigate('/valorant', {
        state: {
          isRunning: true,
        },
      });
    }

    navigate('/lol', {
      state: {
        isRunning: isLolRunning,
      },
    });
  });

  return <div>Main process running</div>;
}
