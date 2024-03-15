import { useState } from "react";
import { Container, Group, Burger, Drawer, ActionIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaShoppingCart } from "react-icons/fa";
import classes from "./HeaderSimple.module.css";
import Cart from "./Cart";

const links = [
  { link: "/", label: "Inicio" },
  { link: "/products", label: "Productos" },
  { link: "/about", label: "Nosotros" },
  { link: "/contact", label: "Contacto" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure();
  const [openStore, { toggle: storeFunction }] = useDisclosure();
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        window.open(link.link, "_self");
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group>
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>
          <ActionIcon
            variant="transparent"
            size={"sm"}
            onClick={(event) => {
              event.preventDefault();
              storeFunction();
            }}
          >
            <FaShoppingCart
              style={{ width: "200%", height: "200" }}
              color="#283618"
            />
          </ActionIcon>
        </Group>
        <Cart openCart={openStore} close={storeFunction} />
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        <Drawer
          opened={opened}
          onClose={toggle}
          title="Menu"
          size={"xs"}
          position="right"
          transitionProps={{
            transition: "fade",
            duration: 150,
            timingFunction: "linear",
          }}
        >
          <div className={classes.drawer}>{items}</div>
        </Drawer>
      </Container>
    </header>
  );
}
