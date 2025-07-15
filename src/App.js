import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import { ROUTES } from './routes/ROUTES';
import Loading from './pages/Loading';
import './styles/main.scss'

// function AppRouter() {
//   const location = useLocation();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => setLoading(false), 500);
//     return () => clearTimeout(timer);
//   }, [location.pathname]);

//   return (
//     <>
//       {loading && <Loading />}
//       <Outlet />
//     </>
//   );
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppRouter />,
//     children: ROUTES, 
//   },
// ]);

const router = createBrowserRouter(ROUTES)

function App() {
  // const [initialLoading, setInitialLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setInitialLoading(false), 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (initialLoading) {
  //   return <Loading />;
  // }

  return <RouterProvider router={router} />;
}

export default App;
