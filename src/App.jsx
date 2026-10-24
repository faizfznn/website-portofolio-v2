// src/App.jsx

import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop.jsx';
import { Analytics } from '@vercel/analytics/react';
import Reveal from './components/Reveal.jsx';
import CustomCursor from './components/CustomCursor';
import Celebrations from './components/Celebrations';

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <main className="min-h-screen bg-[#FAFAFA]">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    );
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        duration: 0.85,
        smoothWheel: true,
        wheelMultiplier: 1.15,
        touchMultiplier: 1.5,
      }}
    >
      <main className="min-h-screen">
        <CustomCursor />
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <header className="flex justify-center py-6">
            <Navbar />
            <Analytics />
          </header>
          <Outlet />
          <footer>
            <Reveal>
              <Footer />
            </Reveal>
          </footer>
          <ScrollToTop />
        </div>
        {/* <Celebrations />  */}
      </main>
    </ReactLenis>
  );
}

export default App;
