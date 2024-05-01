import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Scheduling from '../pages/scheduling/Scheduling';
import Contact from '../pages/contact/Contact';

export default function AppRoutes() {
    /**
     *  Rotas da aplicação.
     */

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/schedule',
            element: <Scheduling />
        },
        {
            path: '/contact',
            element: <Contact />
        }
    ]);

    return (
        <RouterProvider router={router}/>
    )
}