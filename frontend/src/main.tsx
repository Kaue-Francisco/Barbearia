import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import Register from './pages/Register/Register.tsx';
import Contact from './pages/Contact/Contact.tsx';
import "./index.css";

// Routes
import Scheduling from './pages/Scheduling/Scheduling.tsx';

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// QueryClient
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from './components/ui/toaster.tsx';

const BrowserRouter = createBrowserRouter([
  { 
    path: '/',
    element: <App />
  },
  {
    path: '/agendamento',
    element: <Scheduling />
  },
  {
    path: '/registro',
    element:<Register/>
  },
  {
    path: '/contato',
    element:<Contact/>
  }
]);

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={BrowserRouter} />
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>,
)
