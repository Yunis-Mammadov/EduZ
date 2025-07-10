import About from "../pages/About";
import Achievements from "../pages/Achievements";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import NotFound from "../pages/NotFound";

export const ROUTES = [
    {
        path: '',
        element: <MainRoot/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/achievements',
                element: <Achievements/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '*',
                element: <NotFound/>
            },
        ]
    }
]