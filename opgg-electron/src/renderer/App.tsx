import { Component, HTMLAttributes, PropsWithChildren } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

// ROUTES
import Main from './routes/Main';
import Lol from './routes/Lol';
import Valorant from './routes/Valorant';

// STYLES
import 'tailwindcss/tailwind.css';
import './styles/app.css';
import './index.css';

// OTHER
import Layout from './components/Layout';

interface DivProps extends HTMLAttributes<HTMLDivElement> {}

// export default function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/lol" element={<Lol />} />
//           <Route path="/valorant" element={<Valorant />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

export default class App extends Component<DivProps> {
  constructor(props: PropsWithChildren<DivProps>) {
    super(props);
    this.state = {};
  }

  render() {
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
}
