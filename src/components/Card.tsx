
import { FaCartPlus } from "react-icons/fa";
import { PiStarThin } from "react-icons/pi";
import { Button } from "@mantine/core";

import "./styles/Card.css";
import { Product } from "../types/types";
export default function Card({ product }: { product: Product }) {
  //const { addToCart } = useCart();
  return (
    <>
      <div className="cardComponent-container">
        <div className="box-container">
          <div className="box">
            <div className="icons">
              <Button
                color="#22333b"
                className="btn-cart"
                size={"xl"}
                onClick={() => console.log("Añadir al carrito")}
              >
                Añadir <FaCartPlus />
              </Button>
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
                ${product.price} <span>{product.previous_value}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}