import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './styles/FooterLinks.module.css';

const data = [
  {
    title: 'Product',
    links: [
      { label: 'Features', link: '#' },
      { label: 'Pricing', link: '#' },
      { label: 'More info', link: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', link: '#' },
      { label: 'Join us', link: '#' },
      { label: 'Support', link: '#' },
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
          <MantineLogo size={30} />
          <Text size="xs" c="dimmed" className={classes.description}>
            Descubre Café Granito Marrón, donde ofrecemos nuestro Café Orgánico Diferenciado: Café Origen Calima el Darien. Proveniente de nuestra parcela ubicada en la pintoresca Vereda La Florida de Calima el Darien, a una altitud de 1526 metros sobre el nivel del mar, este café orgánico es cultivado y cosechado con esmero, sin el uso de pesticidas ni químicos. Nuestro compromiso con la pureza se extiende a todo el proceso de transformación, garantizando que nuestro café sea completamente libre de conservantes y aditivos. Sumérgete en una experiencia de sabor auténtico, directamente desde el corazón de Colombia, con Café Origen Calima el Darien Orgánico.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 codeTeam.dev. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}