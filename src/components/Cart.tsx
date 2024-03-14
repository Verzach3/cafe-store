import { Button, Drawer, Slider } from "@mantine/core";
import { ProductCart } from "../types/types";

import classes from "./Cart.module.css";
export default function Cart({
  openCart,
  close,
  products,
}: {
  openCart: boolean;
  close: () => void;
  products: ProductCart[];
}) {
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
              />
            </div>
          </div>
          <div className={classes.DeleteButton}>
            <Button fullWidth color="red" style={{ marginTop: 10 }}>
              Eliminar
            </Button>
          </div>
        </div>
      ))}
      <div>
        <div className={classes.Summary}>
          <div className={classes.Quantity}>
            <p>Cantidad de productos</p>
            <p>2</p>
          </div>
          <div className={classes.Total}>
            <p>Total</p>
            <p>$ 200.000</p>
          </div>
        </div>
        <Button fullWidth color="green" style={{ marginTop: 10 }}>
          Comprar
        </Button>
      </div>
    </Drawer>
  );
}
