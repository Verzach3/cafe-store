import {createBrowserRouter } from "react-router-dom";
import Home from "./views/Home.tsx";
import Layout from "./components/Layout.tsx";
import { ContactUs } from "./views/Contact.tsx";
import Products from "./views/Products.tsx";
import { Page404 } from "./views/Page404.tsx";
import ShoppingCartView from "./views/ShoppingCartView.tsx";
import { Auth } from "./views/Auth.tsx";
import Admin from "./views/Admin.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/products", element: <Products/>},
            {path: "/contact", element: <ContactUs/>},
            {path: "/cart", element: <ShoppingCartView/>}
        ],
    },
    {
        path: "*",
        element: <Page404/>,
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
