import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer.tsx";
import { Header } from "./Header.tsx";

function Layout() {
	return (
		<AppShell
			header={{
				height: 50,
			}}
		>
			<AppShell.Header>
				<Header />
			</AppShell.Header>
			<AppShell.Main>
				<Outlet />
				<Footer />
			</AppShell.Main>
		</AppShell>
	);
}

export default Layout;
