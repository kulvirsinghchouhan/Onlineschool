/* import logo from './logo.svg'; */
import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
 import About from './pages/About';
 import Nopage from './pages/Nopage';
 import OnlineClasses from './pages/OnlineClasses';
 import ContactUs from './pages/ContactUs';


function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Nopage />} />
        <Route path="/about" element={<About />} />
        <Route path="/OnlineClasses" element={<OnlineClasses/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
