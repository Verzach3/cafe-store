import {createBrowserRouter} from "react-router-dom";
import Home from "./views/Home.tsx";
import About from "./views/About.tsx";
import Products from "./views/Products.tsx";
import Layout from "./components/Layout.tsx";
import {Auth} from "./views/Auth.tsx";
import Admin from "./views/Admin.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/products",
        element: <Products/>
      }
    ]
  },
  {
    path: "/auth",
    element: <Auth/>
  },
  {
    path: "/admin",
    element: <Admin/>
  }
])