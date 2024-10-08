import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/main";
import Home from "../pages/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";

           const router = createBrowserRouter([
            {
                path: "/",
                element: <Main/>,
                children:[
                  {
                    path:"/",
                    element: <Home/>,
                    loader: () => fetch(`${import.meta.env.VITE_API_URL}/productsCount`)
                  },
                  {
                    path:"/login",
                    element: <Login/>
                  },
                  {
                    path:"/register",
                    element: <Register/>
                  }
                ]
              }
            ]);


export default router;