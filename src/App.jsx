import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RangePage from './pages/RangePage';
import SinglePage from './pages/SinglePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SinglePage />} />
        <Route path="/range" element={<RangePage />} />
        <Route path="/single" element={<SinglePage />} />
      </Routes>
    </Router>
  );
}

export default App;
