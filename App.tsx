import React, { lazy, Suspense } from 'react';
import { Layout } from './components/Layout';

// Lazy load all page components
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Projects = lazy(() => import('./pages/Projects').then(module => ({ default: module.Projects })));
const Clients = lazy(() => import('./pages/Clients').then(module => ({ default: module.Clients })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

// Simple loading component
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-ivory">
    <div className="text-primary text-sm">Loading...</div>
  </div>
);

const App: React.FC = () => {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <section id="home" className="scroll-mt-24">
          <Home />
        </section>
      </Suspense>
      
      <Suspense fallback={<PageLoader />}>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
      </Suspense>
      
      <Suspense fallback={<PageLoader />}>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
      </Suspense>
      
      <Suspense fallback={<PageLoader />}>
        <section id="clients" className="scroll-mt-24">
          <Clients />
        </section>
      </Suspense>
      
      <Suspense fallback={<PageLoader />}>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </Suspense>
    </Layout>
  );
};

export default App;