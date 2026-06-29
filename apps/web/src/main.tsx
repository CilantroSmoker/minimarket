import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Categorias from './pages/Categorias';
import Proveedores from './pages/Proveedores';
import Productos from './pages/Productos';
import Movimientos from './pages/Movimientos';
import Ventas from './pages/Ventas';
import Usuarios from './pages/Usuarios';
import ProtectedRoute from './components/ProtectedRoute';

const qc = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/api/dashboard" replace /> },
      { path: 'login', element: <Login /> },
      { path: 'api', element: <ProtectedRoute permissions={['dashboard.ver']}><Dashboard /></ProtectedRoute> },
      { path: 'api/dashboard', element: <ProtectedRoute permissions={['dashboard.ver']}><Dashboard /></ProtectedRoute> },
      { path: 'api/categorias', element: <ProtectedRoute><Categorias /></ProtectedRoute> },
      { path: 'api/proveedores', element: <ProtectedRoute><Proveedores /></ProtectedRoute> },
      { path: 'api/producto', element: <ProtectedRoute><Productos /></ProtectedRoute> },
      { path: 'api/productos', element: <ProtectedRoute><Productos /></ProtectedRoute> },
      { path: 'api/movimientos', element: <ProtectedRoute><Movimientos /></ProtectedRoute> },
      { path: 'api/ventas', element: <ProtectedRoute><Ventas /></ProtectedRoute> },
      { path: 'api/usuarios', element: <ProtectedRoute permissions={['usuarios.gestionar']}><Usuarios /></ProtectedRoute> },
      { path: '*', element: <Navigate to="/api/dashboard" replace /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={qc}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
