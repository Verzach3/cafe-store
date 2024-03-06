import { Button } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import "./header.css";
import useCart from "../../hooks/useCart";

export default function CartContainer({ carIsOpen }: { carIsOpen: boolean }) {
  const { cart: product, removeFromCart } = useCart();

  return (
    <div className={`cart-items-container ${carIsOpen ? "active" : ""}`}>
      {product.map((item, index) => (
        <div className="cart-item" key={index}>
          <Button
            variant="filled"
            color="rgb(117, 14, 33)"
            size="sm"
            className="btn-delete"
            onClick={() => {
              removeFromCart(item.id);
            }}
          >
            X
          </Button>
          <img src={item.images} alt="" />
          <div className="content">
            <h3>{item.name}</h3>
            <p>{`Cantidad: ${item.quantity}`}</p>
            <div className="price">{item.price}</div>
          </div>
        </div>
      ))}
      <Button
        rightSection={<IconShoppingCart />}
        variant="filled"
        className="btn"
        size="xl"
        color="rgb(227, 101, 29)"
      >
        Comprar
      </Button>
    </div>
  );
}
