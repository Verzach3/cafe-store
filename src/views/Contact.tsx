import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from "@mantine/core";
import {
  IconBrandWhatsapp,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { ContactIconsList } from "../components/ContactIcons";
import classes from "./ContactUs.module.css";

const social = [IconBrandWhatsapp, IconBrandFacebook, IconBrandInstagram];

export function ContactUs() {
  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
      onClick={(event) => {
        event.preventDefault();
        if (Icon === IconBrandWhatsapp) {
          window.open(
            "https://api.whatsapp.com/send?phone=573155663761&text=Hola%2C%20me%20regalas%20mas%20informacion%3F",
            "_blank"
          );
        } else if (Icon === IconBrandFacebook) {
          window.open(
            "https://www.facebook.com/granito.marron.factory/",
            "_blank"
          );
        } else if (Icon === IconBrandInstagram) {
          window.open("https://www.instagram.com/Henryorozco2/", "_blank");
        }
      }}
    >
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>Contactanos</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Dejanos un mensaje y te responderemos lo antes posible.
          </Text>

          <ContactIconsList />

          <Group mt="xl">{icons}</Group>
        </div>
        <div className={classes.form}>
          <TextInput
            label="Correo electrónico"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Nombre completo"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Mensaje para nosotros"
            placeholder="Aqui puedes escribir tu mensaje..."
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button className={classes.control}>Enviar mensaje</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}
