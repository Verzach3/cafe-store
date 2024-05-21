import {
	Card,
	Container,
	SimpleGrid,
	Text,
	Title,
} from "@mantine/core";

import classes from "./FeaturesCards.module.css";

const mockdata = [
	{
		title: "Sena",
		description:
			"El Servicio Nacional de Aprendizaje es un establecimiento público de educación en Colombia que ofrece formación gratuita con programas técnicos, tecnológicos y complementarios. Está adscrito al Ministerio del Trabajo de Colombia y goza de autonomía administrativa.",
		icon: "/sena.png",
	},
	{
		title: "Fondo emprender",
		description:
			"El Fondo Emprender del SENA fomenta la creación de empresas y la generación de empleo en Colombia a través de capital semilla condonable y reembolsable. Busca financiar ideas innovadoras, sostenibles y de gran impacto por medio de convocatorias públicas nacionales y regionales para todas las poblaciones del país",
		icon: "/fondo.png",
	},
	{
		title: "Colombia potencia de vida",
		description:
			"Colombia Potencia de Vida es una estrategia de la Vicepresidencia de la República, liderada por la Consejería Presidencial para la Niñez y la Adolescencia, que busca promover la participación de niños, niñas y adolescentes en la construcción de un país más seguro, equitativo y sostenible.",
		icon: "/colombia.png",
	},
];

export function Features() {
	const features = mockdata.map((feature) => (
		<Card
			key={feature.title}
			shadow="md"
			radius="md"
			className={classes.card}
			padding="xl"
		>
			<img src={feature.icon} alt="" />
			<Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
				{feature.title}
			</Text>
			<Text fz="sm" c="dimmed" mt="sm">
				{feature.description}
			</Text>
		</Card>
	));

	return (
		<Container size="lg" py="xl">
			{/* <Group justify="center">
          <Badge variant="filled" size="lg">
            Sponsors
          </Badge>
        </Group> */}

			<Title order={2} className={classes.title} ta="center" mt="sm">
				Café granito marrón es posible gracias a
			</Title>

			{/* <Text c="dimmed" className={classes.description} ta="center" mt="md">
        En Café Granito Marrón, nos comprometemos a ofrecer a nuestros clientes productos de la más alta calidad, cultivados con cuidado y dedicación en nuestra parcela ubicada en la Vereda La Florida de Calima el Darien, a una altura de 1526 MSN. Nuestro café orgánico se cultiva de manera responsable, sin el uso de pesticidas ni químicos dañinos, garantizando así un producto puro y natural.
        </Text> */}

			<SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
				{features}
			</SimpleGrid>
		</Container>
	);
}
