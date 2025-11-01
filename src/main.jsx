// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import AboutMePage from './pages/AboutMePage.jsx';
import { AlbumProvider } from './components/AlbumContext'; // <-- import provider
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'portfolio', element: <PortfolioPage /> },
      { path: 'about', element: <AboutMePage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Bungkus RouterProvider dengan AlbumProvider */}
    <AlbumProvider>
      <RouterProvider router={router} />
    </AlbumProvider>
  </StrictMode>,
);
