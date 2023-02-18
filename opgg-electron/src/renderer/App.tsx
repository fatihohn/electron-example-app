import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

// ROUTES
import Main from './routes/Main';
import Lol from './routes/Lol';
import Valorant from './routes/Valorant';

// STYLES
import './styles/app.css';

// OTHER
import Layout from './components/Layout';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/lol" element={<Lol />} />
          <Route path="/valorant" element={<Valorant />} />
        </Routes>
      </Layout>
    </Router>
  );
}
