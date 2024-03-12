import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaShoppingCart } from "react-icons/fa";

import classes from './HeaderSimple.module.css';

const links = [
  { link: '/', label: 'Inicio' },
  { link: '/products', label: 'Productos' },
  { link: '/about', label: 'Nosotros' },
  { link: '/contact', label: 'Contacto' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
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
        window.open(link.link, '_self');
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <div className={classes.Notification}>
          <p>10</p>
        </div>
        <FaShoppingCart className={classes.ShoppingCart} size={25} onClick={(event)=>{
          event.preventDefault();
          window.open('/cart', '_self');
        }}/>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm"  />
      </Container>
    </header>
  );
}