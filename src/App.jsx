import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />           {/* Landing page */}
        <Route path="/about" element={<About />} />     {/* About you */}
        <Route path="/portfolio" element={<Portfolio />} /> {/* Projects */}
        <Route path="/blog" element={<Blog />} />   
       <Route path="/project/:id" element={<ProjectDetail />} />

        <Route path="/contact" element={<Contact />} /> {/* Contact form */}
        <Route path="*" element={<NotFound />} />       {/* 404 page */}
      </Routes>
    </Router>
  );
}

export default App;
