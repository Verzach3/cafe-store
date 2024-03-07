import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { IconExternalLink } from '@tabler/icons-react';

import classes from './FooterLinks.module.css';

const data = [
  {
    title: 'Redes sociales',
    links: [
      { label: 'Facebook', link: '#' },
      { label: 'Instagram', link: 'https://www.instagram.com/cafe.granito.marron/' },
      { label: 'WhatsApp', link: '#' },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <h2>Café granito</h2>
          <Text size="xs" c="dimmed" className={classes.description}>
          En Café Granito Marrón, nos comprometemos a ofrecer a nuestros clientes productos de la más alta calidad, cultivados con cuidado y dedicación en nuestra parcela ubicada en la Vereda La Florida de Calima el Darien, a una altura de 1526 MSN. Nuestro café orgánico se cultiva de manera responsable, sin el uso de pesticidas ni químicos dañinos, garantizando así un producto puro y natural.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 Café granito marrón. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          
        </Group>
      </Container>
    </footer>
  );
}