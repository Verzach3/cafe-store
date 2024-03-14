import { useEffect, useState } from 'react';
import { Container, Group, Burger, Drawer, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaShoppingCart } from "react-icons/fa";
import classes from './HeaderSimple.module.css';
import Cart from './Cart';
import useFetch from '../hooks/useFetch';
import { ProductCart } from '../types/types';
import { transformProductCart } from '../helper/transformProducts';


const links = [
  { link: '/', label: 'Inicio' },
  { link: '/products', label: 'Productos' },
  { link: '/about', label: 'Nosotros' },
  { link: '/contact', label: 'Contacto' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure();
  const [openeStore, {toggle : storeFunction} ] = useDisclosure();
  const [active, setActive] = useState(links[0].link);
  const { data } = useFetch("/api/collections/items/records");
  const [product, setProduct] = useState<ProductCart[]>([]);

  useEffect(() => {
    if (data) {
      const res = transformProductCart(data);
      setProduct(res);
    }
}, [data]);
  

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
          <div className={classes.ShoppingCart}>
          <ActionIcon variant="transparent" size={'sm'} onClick={(event)=> {
            event.preventDefault();
            storeFunction();
          }}>
            <FaShoppingCart style={{ width: '200%', height: '200' }} color='#283618'/>
          </ActionIcon>
          <Cart products={product} openCart={openeStore} close={storeFunction}/> 
        </div>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        <Drawer 
        opened={opened} 
        onClose={toggle} 
        title="Menu" size={"xs"} 
        transitionProps={{ transition: 'fade', duration: 150, timingFunction: 'linear' }}
        >
          <div className={classes.drawer}>
            {items}
          </div>
        </Drawer>
        
      </Container>
    </header>
  );
}