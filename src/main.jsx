import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx'; // ✅ Tambahkan ini
import AboutMePage from './pages/AboutMePage.jsx';
import { AlbumProvider } from './components/AlbumContext';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
        children: [
          // ✅ Ini akan membuat halaman /portfolio dan /portfolio/:id berbagi layout
          { index: true, element: <PortfolioPage /> },
          { path: ':id', element: <ProjectDetailPage /> },
        ],
      },
      { path: 'about', element: <AboutMePage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlbumProvider>
      <RouterProvider router={router} />
    </AlbumProvider>
  </StrictMode>
);
