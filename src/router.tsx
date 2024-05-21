import {createBrowserRouter } from "react-router-dom";
import Home from "./views/Home.tsx";
import Layout from "./components/Layout.tsx";
import { ContactUs } from "./views/Contact.tsx";
import Products from "./views/Products.tsx";
import { Page404 } from "./views/Page404.tsx";
import { Auth } from "./views/Auth.tsx";
import Admin from "./views/Admin.tsx";
import { About } from "./views/About.tsx";
import Gallery from "./views/Gallery.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/products", element: <Products/>},
            {path: "/contact", element: <ContactUs/>},
            {path: "/about", element: <About/>},
            {path: "/gallery", element: <Gallery/>},
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
