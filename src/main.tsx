import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Provider as JotaiProvider } from "jotai";
import PocketBase from "pocketbase";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import "@mantine/notifications/styles.css";

declare global {
	interface Window {
		pb: InstanceType<typeof PocketBase>;
	}
}

window.pb = new PocketBase("https://cafe-granito-marron-pb.fly.dev/");

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<JotaiProvider>
			<MantineProvider forceColorScheme="dark">
				<Notifications />
				<RouterProvider router={router} />
			</MantineProvider>
		</JotaiProvider>
	</React.StrictMode>,
);
