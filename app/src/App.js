import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/landing/NavBar';
import Home from './pages/landing/Home';
import About from './pages/landing/About';
import Beta from './pages/landing/Beta';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/beta" element={<Beta />} />
      </Routes>
    </Router>
  );
}

export default App;
