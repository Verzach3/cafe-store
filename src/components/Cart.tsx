import { Button, Drawer, Slider } from "@mantine/core";

import classes from "./Cart.module.css";
import useCart from "../hooks/useCart";

export default function Cart({
  openCart,
  close,
}: {
  openCart: boolean;
  close: () => void;
}) {
  const { cart: products, removeFromCart, modifyQuantity } = useCart();
  const total = products.reduce(
    (acc, product) => acc + parseFloat(product.price) * product.quantity, 0.0);
  
  const quantity = products.reduce( (acc, product) => acc + product.quantity, 0);
  return (
    <Drawer
      opened={openCart}
      onClose={close}
      title="Productos añadidos"
      position="right"
    >
      {products.map((product) => (
        <div className={classes.CardContainer} key={product.id}>
          <img src={product.images} alt="" className="classes.CardImage" />
          <div className={classes.CardInfo}>
            <div className={classes.CardTitle}>
              <p>{product.name}</p>
            </div>
            <div className={classes.CardPrice}>
              <p>{product.price}</p>
            </div>
            <div className={classes.PriceSlider}>
              <Slider
                color="rgba(0, 0, 0, 1)"
                size="xs"
                marks={[
                  { value: 20, label: "20" },
                  { value: 50, label: "50" },
                  { value: 80, label: "80" },
                ]}
                defaultValue={product.quantity}
                max={100}
                min={1}
                onChange={(value) => modifyQuantity(product.id, value)}
              />
            </div>
          </div>
          <div className={classes.DeleteButton}>
            <Button fullWidth color="red" style={{ marginTop: 10 }} onClick={(event)=> {
              event.preventDefault();
              removeFromCart(product.id);
            }}>
              Eliminar
            </Button>
          </div>
        </div>
      ))}
      <div>
        <div className={classes.Summary}>
          <div className={classes.Quantity}>
            <p>Cantidad de productos</p>
            <p>{quantity}</p>
          </div>
          <div className={classes.Total}>
            <p>Total</p>
            <p>${total}</p>
          </div>
        </div>
        <Button fullWidth color="green" style={{ marginTop: 10 }} onClick={(event)=> {
          event.preventDefault();
          window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        }}>
          Comprar
        </Button>
      </div>
    </Drawer>
  );
}
