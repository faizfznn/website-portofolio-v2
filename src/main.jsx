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
      { path: 'about', element: <AboutMePage /> },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'portfolio/:id',
        element: <ProjectDetailPage />,
      },
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
