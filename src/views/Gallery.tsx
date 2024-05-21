import {
	Container,
	Grid,
	Image,
	Stack,
	Title,
} from "@mantine/core";

function Gallery() {
	return (
		<Container mih={"100dvh"} mt={"xl"}>
			<Stack w={"100%"}>
				<Title ta={"center"}>Galeria</Title>
				<Grid grow>
					<Grid.Col span={4}>
						<Image
							radius="md"
							src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
						/>
					</Grid.Col>
					<Grid.Col span={4}>
						<Image
							radius="md"
							src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
						/>
					</Grid.Col>
					<Grid.Col span={4}>
						<Image
							radius="md"
							src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
						/>
					</Grid.Col>
					<Grid.Col span={4}>
						<Image
							radius="md"
							src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
						/>
					</Grid.Col>
					<Grid.Col span={4}>
						<Image
							radius="md"
							src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
						/>
					</Grid.Col>
				</Grid>
			</Stack>
		</Container>
	);
}

export default Gallery;
