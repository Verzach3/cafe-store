import { Button, Card, Center, Drawer, Input, Text } from "@mantine/core";

import useCart from "../hooks/useCart";
import type { ProductCart } from "../types/types";
import classes from "./Cart.module.css";

export default function Cart({
	openCart,
	close,
}: {
	openCart: boolean;
	close: () => void;
}) {
	const { cart: products, removeFromCart, modifyQuantity } = useCart();

	const total = products.reduce(
		(acc, product) =>
			acc +
			Number.parseFloat(product.price.replace(/\./g, "")) * product.quantity,
		0.0,
	);

	const phoneNumber = "573155663761";

	const formatProductsAsText = (products: ProductCart[]): string => {
		let text = "Hola, me gustaría comprar los siguientes productos: \n\n";
		products.forEach((product, index) => {
			text += `\n*Producto ${index + 1}*\n`;
			text += `Nombre: ${product.name}\n`;
			text += `Precio: $${product.price}\n`;
			text += `Descripción: ${product.description}\n`;
			text += `Cantidad: ${product.quantity}\n`;
			text += "----------\n";
		});
		return `${text}\n*Total*: ${new Intl.NumberFormat("es-CO", {
			style: "currency",
			currency: "COP",
		}).format(total)}`;
	};

	const handleSendWhatsAppMessage = () => {
		if (products.length === 0) return;
		const formattedProducts = formatProductsAsText(products);
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
			formattedProducts,
		)}`;
		window.open(whatsappUrl, "_blank");
	};

	const quantity = products.reduce((acc, product) => acc + product.quantity, 0);
	return (
		<Drawer
			opened={openCart}
			onClose={close}
			title="Productos añadidos"
			position="right"
		>
			{products.map((product) => (
				<Card className={classes.CardContainer} key={product.id} withBorder>
					<img src={product.images} alt="" className="classes.CardImage" />
					<div className={classes.CardInfo}>
						<div className={classes.CardTitle}>
							<p>{product.name}</p>
						</div>
						<Text size="lg">
							<p>${product.price}</p>
						</Text>
						<Center>
							<Button
								onClick={(event) => {
									event.preventDefault();
									modifyQuantity(product.id, product.quantity + 1);
								}}
							>
								+
							</Button>
							<Input
								placeholder="Ingrese la cantidad que desea"
								type="number"
								style={{
									width: "100px",
									textAlign: "center",
									margin: "0 10px",
									padding: "0",
									height: "30px",
									textAlignLast: "center",
								}}
								value={product.quantity}
								onChange={(event) => {
									event.preventDefault();
									if (Number.parseInt(event.currentTarget.value) > 0)
										modifyQuantity(
											product.id,
											Number.parseInt(event.currentTarget.value),
										);
								}}
							/>
							<Button
								onClick={(event) => {
									event.preventDefault();
									if (product.quantity > 1)
										modifyQuantity(product.id, product.quantity - 1);
								}}
							>
								-
							</Button>
						</Center>
						<div className={classes.Quantity}>
							<p>Cantidad</p>
							<p>{product.quantity}</p>
						</div>
					</div>
					<div className={classes.DeleteButton}>
						<Button
							fullWidth
							color="red"
							style={{ marginTop: 10 }}
							onClick={(event) => {
								event.preventDefault();
								removeFromCart(product.id);
							}}
						>
							Eliminar
						</Button>
					</div>
				</Card>
			))}
			<div>
				<Card withBorder className={classes.Summary}>
					<div className={classes.Quantity}>
						<p>Cantidad de productos</p>
						<p>{quantity}</p>
					</div>
					<div className={classes.Total}>
						<p>Total</p>
						<p>
							{new Intl.NumberFormat("es-CO", {
								style: "currency",
								currency: "COP",
							}).format(total)}
						</p>
					</div>
				</Card>
				<Button
					fullWidth
					color="green"
					style={{ marginTop: 10 }}
					onClick={handleSendWhatsAppMessage}
				>
					Comprar
				</Button>
			</div>
		</Drawer>
	);
}
