import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import AboutSkills from './components/AboutSkills/AboutSkills';
import Contact from './components/Contact/Contact.js';
 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
         <Route path="/AboutSkills" element={<AboutSkills/>} />
          <Route path="/Contact" element={<Contact/>} />
      </Routes>

    </Router>
  );
}
export default App;