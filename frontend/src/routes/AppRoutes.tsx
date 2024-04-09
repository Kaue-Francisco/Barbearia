import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home/Home';

export default function AppRoutes() {
    /**
     * Cria as rotas da aplicação.
     */
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        }
    ]);

    return (
        <RouterProvider router={router}/>
    )
}