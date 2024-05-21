import { Box, Stack, Text, rem } from "@mantine/core";
import { IconAt, IconMapPin, IconPhone, IconSun } from "@tabler/icons-react";
import classes from "./ContactIcons.module.css";

interface ContactIconProps
	extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
	icon: typeof IconSun;
	title: React.ReactNode;
	description: React.ReactNode;
}

function ContactIcon({
	icon: Icon,
	title,
	description,
	...others
}: ContactIconProps) {
	return (
		<div className={classes.wrapper} {...others}>
			<Box mr="md">
				<Icon style={{ width: rem(24), height: rem(24) }} />
			</Box>

			<div>
				<Text size="xs" className={classes.title}>
					{title}
				</Text>
				<Text className={classes.description}>{description}</Text>
			</div>
		</div>
	);
}

const MOCKDATA = [
	{
		title: "Correo eléctronico",
		description: "cafegranitomarron@gmail.com",
		icon: IconAt,
	},
	{
		title: "Número de teléfono",
		description: "+57 315 5663761",
		icon: IconPhone,
	},
	{
		title: "Dirección",
		description:
			"Parcela en la Vereda La Florida de Calima el Darien, a 1526 metros sobre el nivel del mar",
		icon: IconMapPin,
	},
	{
		title: "Horario de trabajo",
		description: "8 a.m. – 11 p.m.",
		icon: IconSun,
	},
];

export function ContactIconsList() {
	const items = MOCKDATA.map((item, index) => (
		<ContactIcon key={index} {...item} />
	));
	return <Stack>{items}</Stack>;
}
