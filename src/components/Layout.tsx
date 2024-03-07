import {AppShell} from "@mantine/core";
import Header from "./Header/Header.tsx";
import {Outlet} from "react-router-dom";
import {FooterLinks} from "./Footer/Footer.tsx";

function Layout() {
  return (
    <AppShell>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet/>
        <FooterLinks/>
      </AppShell.Main>
    </AppShell>
  )
}

export default Layout;