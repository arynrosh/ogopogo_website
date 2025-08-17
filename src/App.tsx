// src/App.tsx
import React, { useEffect, useState, lazy, Suspense } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import SocialWidget from './components/SocialWidget';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// === Lazy-loaded routes (code-splitting) ===
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Team = lazy(() => import('./pages/Team'));
const Sponsors = lazy(() => import('./pages/Sponsors'));
const News = lazy(() => import('./pages/News'));
const Join = lazy(() => import('./pages/Join'));

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
    setIsDesktop(mq.matches);

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

// Hook: respect reduced motion
function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setPrefers(mq.matches);
    onChange();
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);
  return prefers;
}

function App() {
  const isDesktop = useIsDesktop();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Router>
      {/* Page scaffold: ensures content fills the viewport; footer sits flush at bottom */}
      <div className="flex min-h-screen flex-col">
        {/* Desktop-only custom cursor, disabled if user prefers reduced motion */}
        {isDesktop && !reducedMotion && (
          <AnimatedCursor
            innerSize={6}
            outerSize={28}
            color="255, 200, 46"     // Ogopogo Solar yellow
            outerAlpha={0.28}
            innerScale={0.9}
            outerScale={1.6}
            // Keep the custom cursor above any portals/modals
            innerStyle={{ zIndex: 999999 }}
            outerStyle={{ zIndex: 999999 }}
            // Treat these as click targets for hover/press effects
            clickables={[
              'a',
              'button',
              '.link',
              'input',
              'textarea',
              'select',
              '.custom-clickable',
              // blog cards + modal surface
              '.blog-card',
              '.modal-surface',
            ]}
            trailingSpeed={6} // lighter workload
          />
        )}

        {/* Routes fill remaining space; Layout should render <main className="flex-grow"> internally */}
        <div className="flex-grow">
          <Suspense fallback={<div className="p-8 text-white">Loading…</div>}>
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
          </Suspense>
        </div>

        {/* Fixed/overlay widget (doesn't affect layout height) */}
        <SocialWidget />
      </div>
    </Router>
  );
}

export default App;
