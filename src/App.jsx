// src/App.jsx

import { Outlet, ScrollRestoration } from "react-router-dom"; // 1. Impor
import Navbar from "./components/Navbar";
import "./index.css";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <main className="bg-white min-h-screen">
      {/* <ScrollRestoration /> 2. Tambahkan ini */}
      <div className="container mx-auto px-4">
        <header className="flex justify-center py-6">
          <Navbar />
        </header>
        {/* Konten halaman akan dirender di sini */}
        <Outlet />
        <footer>
          <Footer />
        </footer>
        <ScrollToTop />
      </div>
    </main>
  );
}

export default App;
