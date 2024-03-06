import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import PocketBase from "pocketbase";
import { Provider as JotaiProvider } from "jotai";
declare global {
  interface Window {
    pb: InstanceType<typeof PocketBase>;
  }
}

window.pb = new PocketBase("https://cafe-granito-marron-pb.fly.dev/");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <JotaiProvider>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </JotaiProvider>
  </React.StrictMode>
);
