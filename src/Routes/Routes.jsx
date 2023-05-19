import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import AddAToy from "../Pages/AddAToy/AddAToy";
import PriveteRoute from "./PriveteRoute";
import AllToy from "../Pages/AllToy/AllToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/addAToy",
          element: <PriveteRoute><AddAToy></AddAToy></PriveteRoute>
        },
        {
          path: "/allToy",
          element:<AllToy></AllToy>,
          loader: () => fetch('http://localhost:5000/cars')
        },
        {
          path: "*",
          element: <NotFound></NotFound>
        }
      ]
    },
  ]);

  export default router;