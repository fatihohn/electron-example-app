/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GameContext } from './context/game';

// ROUTES
import Main from './pages/Main';
import Lol from './pages/Lol';
import Valorant from './pages/Valorant';

// STYLES
import 'tailwindcss/tailwind.css';
import './styles/app.css';
import './index.css';

// OTHER
import Layout from './components/Layout';

const queryClient = new QueryClient();

export default function App() {
  const [isLolRunning, setIsLolRunning] = useState(false);
  const [isValorantRunning, setIsValorantRunning] = useState(false);
  return (
    <GameContext.Provider
      value={{
        isLolRunning,
        isValorantRunning,
        setIsLolRunning,
        setIsValorantRunning,
      }}
    >
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/lol" element={<Lol />} />
            <Route path="/valorant" element={<Valorant />} />
          </Routes>
        </Layout>
      </Router>
    </GameContext.Provider>
  );
}
