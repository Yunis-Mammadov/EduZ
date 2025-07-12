import About from "../pages/About";
import Achievements from "../pages/Achievements";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import MainRoot from "../pages/MainRoot";
import LoginRoot from "../pages/LoginRoot";
import NotFound from "../pages/NotFound";
import RegisterPage from "../pages/Register";

export const ROUTES = [
    {
        path: '',
        element: <MainRoot />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/achievements',
                element: <Achievements />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    },
    {
        path: '/',
        element: <LoginRoot />,
        children: [
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/register',
                element: <RegisterPage />
            }
        ]
    }
]