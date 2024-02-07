import { Card, Image, Text, Group, Button } from '@mantine/core';
import classes from './styles/FeaturesCard.module.css';
import { useState } from 'react';


export function FeaturesCard( {name, price, image, description} : {name: string, price: number, image: string, description: string})  {


  

    const [addCart, setaddCart] = useState(0);


    const addCartHandler = () => {
        setaddCart(addCart + 1);
    }

    const removeCartHandler = () => {
        addCart > 0 ? setaddCart(addCart - 1) : setaddCart(0);
    }

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={ image } alt= { name } />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <div>
          <Text fw={500}>{ name }</Text>
          <Text fz="xs" c="dimmed">
            { description }
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
            Description
        </Text>

        <Group gap={8} mb={-8}>
          { description }
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group gap={30}>
          <div>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              ${ price }
            </Text>
            <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
            </Text>
          </div>

          <Button variant="filled" color="rgba(0, 0, 0, 1)"  onClick={ removeCartHandler } size='xs' radius="xs" >-</Button>
            <Text>{ addCart }</Text>
          <Button variant="filled" color="rgba(0, 0, 0, 1)"  onClick={ addCartHandler } size='xs' radius="xs" >+</Button>
          
        </Group>
      </Card.Section>
    </Card>
  );
}