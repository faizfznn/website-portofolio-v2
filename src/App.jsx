// src/App.jsx

import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop.jsx';
import { Analytics } from '@vercel/analytics/react';
import Reveal from './components/Reveal.jsx';
import CustomCursor from './components/CustomCursor';
import Celebrations from './components/Celebrations';

function App() {
  return (
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
  );
}

export default App;
