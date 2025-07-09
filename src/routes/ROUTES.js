import Achievements from "../pages/Achievements";
import Contacts from "../pages/Contacts";
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
                path: '/contacts',
                element: <Contacts/>
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