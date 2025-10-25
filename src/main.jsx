// src/main.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import AboutMePage from './pages/AboutMePage.jsx';
import './index.css';

// Definisikan rute untuk setiap halaman
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App.jsx akan menjadi layout utama
    children: [
      { index: true, element: <HomePage /> }, // Halaman utama
      { path: 'portfolio', element: <PortfolioPage /> },
      { path: 'about', element: <AboutMePage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);