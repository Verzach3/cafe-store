import {createBrowserRouter} from "react-router-dom";
import Home from "./views/Home.tsx";
import About from "./views/About.tsx";
import Products from "./views/Products.tsx";

export const router = createBrowserRouter([
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
])