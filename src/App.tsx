import React from 'react';
import AnimatedCursor from 'react-animated-cursor';
import SocialWidget from './components/SocialWidget';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';
import News from './pages/News';
import Join from './pages/Join';

function App() {
  return (
    <Router>
      {/* 🔹 Custom Animated Cursor */}
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="255, 200, 46"   // Ogopogo Solar yellow
        outerAlpha={0.3}
        innerScale={1}
        outerScale={2}
        clickables={[
          'a',
          'button',
          '.link',
          'input',
          'textarea',
          'select',
          '.custom-clickable'
        ]}
      />

      {/* Your site routing */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="team" element={<Team />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="news" element={<News />} />
          <Route path="join" element={<Join />} />
        </Route>
      </Routes>

      {/* Social links widget */}
      <SocialWidget />
    </Router>
  );
}

export default App;
