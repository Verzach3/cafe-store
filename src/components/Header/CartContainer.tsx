import { Button, Slider } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import "./header.css";
import useCart from "../../hooks/useCart";


export default function CartContainer({ carIsOpen }: { carIsOpen: boolean }) {
  const { cart: product, removeFromCart, modifyQuantity } = useCart();
  

  return (
    <div className={`cart-items-container ${carIsOpen ? "active" : ""}`}>
      {product.map((item, index) => (
        <div className="cart-item" key={index}>
          <Button
            variant="filled"
            color="rgb(149, 1, 1)"
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
            <Slider
              color="rgb(255, 0, 0)"
              size="xl"
              marks={[
                { value: 20, label: "20%" },
                { value: 50, label: "50%" },
                { value: 80, label: "80%" },
              ]}
              className="slider"
              defaultValue={item.quantity}
              min={1}
              onChange={(value) => modifyQuantity(item.id, value)}
            />
            <div className="price">{item.price}</div>
          </div>
        </div>
      ))}
      <Button
        rightSection={<IconShoppingCart />}
        variant="filled"
        className="btn"
        size="xl"
        color="rgb(255, 0, 0)"
      >
        Comprar
      </Button>
    </div>
  );
}
