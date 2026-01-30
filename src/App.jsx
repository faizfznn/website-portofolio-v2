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
      {/* <Celebrations />  */}
      <div className="container mx-auto px-4">
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
    </main>
  );
}

export default App;
