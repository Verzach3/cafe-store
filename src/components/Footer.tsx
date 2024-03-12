import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandYoutube, IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons-react';
import classes from './FooterLinks.module.css';

const data = [
  {
    title: "Redes sociales",
    links: [
      {
        label: "Facebook",
        link: "https://www.facebook.com/granito.marron.factory/",
      },
      {
        label: "Instagram",
        link: "https://www.instagram.com/Henryorozco2/",
      },
      {
        label: "WhatsApp",
        link: "https://api.whatsapp.com/send?phone=573155663761&text=Hola%2C%20me%20regalas%20mas%20informacion%3F",
      },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => {event.preventDefault()
          window.open(link.link, "_blank")
        }}
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
          <Text size="xs" c="dimmed" className={classes.description}>
          En Café Granito Marrón, nos comprometemos a ofrecer a nuestros
          clientes productos de la más alta calidad, cultivados con cuidado y
          dedicación en nuestra parcela ubicada en la Vereda La Florida de
          Calima el Darien, a una altura de 1526 MSN. Nuestro café orgánico se
          cultiva de manera responsable, sin el uso de pesticidas ni químicos
          dañinos, garantizando así un producto puro y natural.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 Granito Marrón. Todos los derechos reservados.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandWhatsapp style={{ width: rem(18), height: rem(18) }} stroke={1.5} onClick={(event)=> {
              event.preventDefault()
              window.open('https://api.whatsapp.com/send?phone=573155663761&text=Hola%2C%20me%20regalas%20mas%20informacion%3F', "_blank")
            }}/>
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} onClick={(event)=> {
              event.preventDefault()
              window.open('https://www.youtube.com/channel/UCvJ6yG1n7Q6V8Q1c9wJ8Y9w', "_blank")
            }}/>
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5}  onClick={(event) => {
              event.preventDefault()
              window.open('https://www.instagram.com/Henryorozco2/', "_blank")
            }}/>
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}