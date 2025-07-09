import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/ROUTES";
import './index.css'

function App() {
  
  const routes = createBrowserRouter(ROUTES) 
  
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  );
}

export default App;
