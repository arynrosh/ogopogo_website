// src/App.tsx
import { useEffect, useState } from 'react';
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

// Hook: only show cursor on desktop (>=1180px) AND fine pointer (i.e., a mouse)
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const mq = window.matchMedia('(min-width: 1180px) and (pointer: fine)');
    return mq.matches;
  });

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1180px) and (pointer: fine)');
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    // set once in case SSR/hydration
    setIsDesktop(mq.matches);
    // add listener
    if (mq.addEventListener) {
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    } else {
      // Safari <14 fallback
      // @ts-ignore
      mq.addListener(handler);
      // @ts-ignore
      return () => mq.removeListener(handler);
    }
  }, []);

  return isDesktop;
}

function App() {
  const isDesktop = useIsDesktop();

  return (
    <Router>
      {/* Desktop-only custom cursor */}
      {isDesktop && (
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
      )}

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

      <SocialWidget />
    </Router>
  );
}

export default App;
