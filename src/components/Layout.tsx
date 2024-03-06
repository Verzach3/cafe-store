import {AppShell} from "@mantine/core";
import Header from "./Header/Header.tsx";
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <AppShell>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet/>
      </AppShell.Main>
    </AppShell>
  )
}

export default Layout;