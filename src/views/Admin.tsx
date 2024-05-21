import {
	Card,
	Container,
	Image,
	Indicator,
	SimpleGrid,
	Text,
	TextInput,
} from "@mantine/core";
import { useEffect, useState } from "react";
import type { Item } from "../types/types.ts";

function Admin() {
	const [products, setProducts] = useState<Item[]>([]);
	useEffect(() => {
		window.pb
			.collection("items")
			.getFullList<Item>()
			.then((response) => {
				return setProducts(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div>
			<h1>Admin</h1>
			<SimpleGrid cols={2}>
				{products.map((product) => {
					return (
						<Card key={product.id} withBorder>
							<Text>Nombre</Text>
							<TextInput />
							<h2>{product.name}</h2>
							<p>{product.description}</p>
							<p>{product.price}</p>
							<Card.Section>
								<Container>
									<SimpleGrid cols={4}>
										{product.images.map((image) => {
											return (
												<Indicator inline size={16} label={"x"} key={image}>
													<Card withBorder>
														<Image
															key={image}
															fit={"contain"}
															height={80}
															src={window.pb.files.getUrl(product, image)}
															alt={product.name}
														/>
													</Card>
												</Indicator>
											);
										})}
									</SimpleGrid>
								</Container>
							</Card.Section>
						</Card>
					);
				})}
			</SimpleGrid>
		</div>
	);
}

export default Admin;
