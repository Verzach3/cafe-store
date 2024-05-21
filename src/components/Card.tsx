import { Button, Image, Text } from "@mantine/core";
import { FaCartPlus } from "react-icons/fa";
import "@mantine/notifications/styles.css";

import "./styles/Card.css";
import useCart from "../hooks/useCart";
import type { Product } from "../types/types";

export default function Card({ product }: { product: Product }) {
	const { addToCart } = useCart();

	return (
		<>
			<div className="cardComponent-container">
				<div className="box-container">
					<div className="box">
						<div className="icons"></div>
						<Image
							h={"60%"}
							w={"60%"}
							mt={"md"}
							radius={"lg"}
							src={product.images}
						/>
						<div className="content">
							<Text size="lg" mt={"md"} fw={600}>
								{product.name}
							</Text>
							{/* <div className="stars">
                <i>
                  <PiStarThin />
                </i>
                <i>
                <PiStarThin />
                </i>
                <i>
                <PiStarThin />
                </i>
                <i>
                <PiStarThin />
                </i>
                <i>
                <PiStarThin />
                </i>
              </div> */}
							<Text fw={600} className="price">
								${product.price}
								{/* <span>{product.previous_value}</span> */}
							</Text>
							<Button
								mt={"md"}
								color="#22333b"
								className="btn-cart"
								size={"xl"}
								onClick={() => {
									addToCart(product, 1);
								}}
							>
								Añadir <FaCartPlus />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
