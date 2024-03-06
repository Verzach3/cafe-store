import { Product } from "../../types/types";
import { FaCartPlus } from "react-icons/fa";
import { PiStarThin } from "react-icons/pi";
import { Button } from "@mantine/core";

import "./Card.css";
import { useState } from "react";
import useCart from "../../hooks/useCart";
import '../styleComponent.css';
export default function Card({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSubs = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  const { addToCart } = useCart();

  return (
    <>
      <div className="container">
        <div className="box-container">
          <div className="box">
            <div className="icons">
              <div className="buttons">
                <Button
                  variant="filled"
                  color="rgb(255, 0, 0)"
                  size="xl"
                  onClick={handleAdd}
                  className="btn-add"
                >
                  +
                </Button>
                <Button
                  variant="filled"
                  color="rgb(255, 0, 0)"
                  size="xl"
                  onClick={handleSubs}
                  className="btn-substract"
                >
                  -
                </Button>
              </div>
              <Button
                color="rgb(149, 1, 1)"
                className="btn-cart"
                size={"xl"}
                onClick={() => addToCart(product, quantity)}
              >
                Añadir <FaCartPlus />
              </Button>
              <div className="quantity">{quantity}</div>
            </div>
            <div className="image">
              <img src={product.images} alt="" />
            </div>
            <div className="content">
              <h3>{product.name}</h3>
              <div className="stars">
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
              </div>
              <div className="price">
                ${product.price} <span>20.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
