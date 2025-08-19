import About from "../pages/About";
import Achievements from "../pages/Achievements";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import LoginRoot from "../pages/LoginRoot";
import MainRoot from "../pages/MainRoot";
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
                path: '/achievements',
                element: <Achievements />
            },
            {
                path: '/courses',
                element: <Courses />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
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