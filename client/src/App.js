import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './Pages/About'; // Adjust the path as necessary
import MedalTracker from './Pages/MedalTracker';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MedalTracker />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
