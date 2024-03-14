import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HeroBullets.module.css';

export function About() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Café Granito Marrón <br /> 
            <span className={classes.subtitle}>¿Quienes somos?</span>
          </Title>
          <Text c="dimmed" mt="md">
          ¡Bienvenidos! Somos Café granito marrón, dedicados a ofrecer café de la más alta calidad. Proveniente de nuestra parcela en la Vereda La Florida de Calima el Darien, a 1526 metros sobre el nivel del mar, nuestro café es orgánico, libre de pesticidas y químicos. Desde el campo hasta tu taza, mantenemos la pureza y autenticidad de cada grano. Únete a nosotros en esta experiencia de sabor única y sostenible.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Libre de pesticidas y químicos</b>
            </List.Item>
            <List.Item>
              <b>Libre de conservantes y adictivos</b>
            </List.Item>
            <List.Item>
              <b>100% Natural</b>
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control} onClick={(event)=> {
                event.preventDefault();
                window.location.href='/products';
            }}>
              Ver productos
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control} onClick={(event)=> {
                event.preventDefault();
                window.location.href='/contact';
            }} >
              Contacto
            </Button>
          </Group>
        </div>
        <Image src="/Logo.avif" className={classes.image} />
      </div>
    </Container>
  );
}