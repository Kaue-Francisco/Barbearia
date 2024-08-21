import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import Registro from './pages/Registro/Registro';
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/registro',
    element:<Registro/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>,
)
