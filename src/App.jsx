import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './pages/Layout';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import NotFoundPage from './pages/NotFoundPage';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="404" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
