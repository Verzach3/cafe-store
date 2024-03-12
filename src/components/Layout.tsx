import {AppShell} from "@mantine/core";
import {Outlet} from "react-router-dom";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";

function Layout() {
  return (
    <AppShell>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet/>
        <Footer/>
      </AppShell.Main>
    </AppShell>
  )
}

export default Layout;