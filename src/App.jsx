// src/App.jsx

import { Outlet, ScrollRestoration } from 'react-router-dom'; // 1. Impor
import Navbar from './components/Navbar';
import './index.css';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop.jsx';
import { Analytics } from '@vercel/analytics/react';
import Reveal from './components/Reveal.jsx';
import CustomCursor from './components/CustomCursor'; // Impor kursor

function App() {
  return (
    <main className="bg-white min-h-screen">
      <CustomCursor /> {/* Tambahkan di sini */}
      {/* <ScrollRestoration /> 2. Tambahkan ini */}
      <div className="container mx-auto px-4">
        <header className="flex justify-center py-6">
          <Navbar />
          <Analytics />
        </header>
        {/* Konten halaman akan dirender di sini */}
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
