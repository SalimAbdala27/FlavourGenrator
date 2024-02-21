import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import BlondeLeaf from './pages/BlondLeaf/BlondeLeaf';
import DarkLeaf from './pages/DarkLeaf/DarkLeaf';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/blond-leaf" element={<BlondeLeaf />} />
          <Route path="/dark-leaf" element={<DarkLeaf />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
