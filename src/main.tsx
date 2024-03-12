import "@mantine/core/styles.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from "@mantine/core";
import {RouterProvider} from "react-router-dom";
import {router} from "./router.tsx";
import PocketBase from "pocketbase";

declare global {
    interface Window {
        pb: InstanceType<typeof PocketBase>;
    }
}

window.pb = new PocketBase("https://cafe-granito-marron-pb.fly.dev/");

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider>
            <RouterProvider router={router}/>
        </MantineProvider>
    </React.StrictMode>,
)
