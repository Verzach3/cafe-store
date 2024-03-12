import { Title, Text, Container, Overlay } from '@mantine/core';
import classes from './HeroImageBackground.module.css';

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Café granito marrón{' '}
          <Text component="span" inherit className={classes.highlight}>
            un sabor único
          </Text>
        </Title>

        <Container size={740}>
          <Text size="lg" className={classes.description}>
            Aquí encontraras el mejor café de la región, con un sabor único y un aroma inigualable.
          </Text>
        </Container>

        <div className={classes.controls}>
        </div>
      </div>
    </div>
  );
}