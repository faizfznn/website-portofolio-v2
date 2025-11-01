// src/App.jsx

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <header className="flex justify-center py-6">
          <Navbar />
        </header>
        
        {/* Konten halaman akan dirender di sini */}
        <Outlet />
      </div>
    </main>
  );
}

export default App;