import { Button, Container, Group, Text, Title } from "@mantine/core";
import classes from "./NotFoundTitle.module.css";

export function Page404() {
	return (
		<Container className={classes.root}>
			<div className={classes.label}>404</div>
			<Title className={classes.title}>
				Desafortunadamente no podemos encontrar la página que estás buscando.
			</Title>
			<Text c="dimmed" size="lg" ta="center" className={classes.description}>
				Este enlace puede estar roto o la página puede haber sido eliminada.
			</Text>
			<Group justify="center">
				<Button
					variant="subtle"
					size="md"
					onClick={(event) => {
						event.preventDefault();
						window.open("/", "_self");
					}}
				>
					Volver a la página principal
				</Button>
			</Group>
		</Container>
	);
}
