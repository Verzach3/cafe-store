import { Card, Image, Text, Group, Button } from "@mantine/core";
import classes from "./styles/FeaturesCard.module.css";
import { useState } from "react";
import './styles/Rating.css'
export function FeaturesCard({
  name,
  price,
  image,
  description,
  cardId,
}: {
  name: string;
  price: number;
  image: string;
  description: string;
  cardId: string;
}) {
  const [addCart, setaddCart] = useState(0);
  const [rating, setRating] = useState<string | null>(null);

  const addCartHandler = () => {
    setaddCart(addCart + 1);
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(e.target.value);
  };

  const removeCartHandler = () => {
    addCart > 0 ? setaddCart(addCart - 1) : setaddCart(0);
  };

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={image} alt={name} />
      </Card.Section>

      <Group justify="space-between" mt="md">
      <div>
        <Text fw={500}>{name}</Text>
        <div className="rating">
          <input value="5" name={`rating-${cardId}`} id={`star5-${cardId}`} type="radio" checked={rating === '5'} onChange={handleRatingChange} />
          <label htmlFor={`star5-${cardId}`}></label>
          <input value="4" name={`rating-${cardId}`} id={`star4-${cardId}`} type="radio" checked={rating === '4'} onChange={handleRatingChange} />
          <label htmlFor={`star4-${cardId}`}></label>
          <input value="3" name={`rating-${cardId}`} id={`star3-${cardId}`} type="radio" checked={rating === '3'} onChange={handleRatingChange} />
          <label htmlFor={`star3-${cardId}`}></label>
          <input value="2" name={`rating-${cardId}`} id={`star2-${cardId}`} type="radio" checked={rating === '2'} onChange={handleRatingChange} />
          <label htmlFor={`star2-${cardId}`}></label>
          <input value="1" name={`rating-${cardId}`} id={`star1-${cardId}`} type="radio" checked={rating === '1'} onChange={handleRatingChange} />
          <label htmlFor={`star1-${cardId}`}></label>
        </div>
      </div>
    </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
          Description
        </Text>

        <Group gap={8} mb={-8}>
          {description}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group gap={30}>
          <div>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              ${price}
            </Text>
            <Text
              fz="sm"
              c="dimmed"
              fw={500}
              style={{ lineHeight: 1 }}
              mt={3}
            ></Text>
          </div>

          <Button
            variant="filled"
            color="rgba(0, 0, 0, 1)"
            onClick={removeCartHandler}
            size="xs"
            radius="xs"
          >
            -
          </Button>
          <Text>{addCart}</Text>
          <Button
            variant="filled"
            color="rgba(0, 0, 0, 1)"
            onClick={addCartHandler}
            size="xs"
            radius="xs"
          >
            +
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
