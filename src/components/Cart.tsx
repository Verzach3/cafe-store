import { Button, Drawer,Input } from "@mantine/core";

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
    (acc, product) =>
      acc + parseFloat(product.price.replace(/\./g, '')) * product.quantity,
    0.0
  );
  
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
            <div className={classes.PriceButtons}>
              <Button  onClick={(event)=>{
                event.preventDefault();
                modifyQuantity(product.id, product.quantity+1);
              }}>+</Button>
              <Input placeholder="Ingrese la cantidad que desea" type="number" style = {
                {width: "100px", textAlign: "center", margin: "0 10px", padding: "0", height: "30px",
                  textAlignLast: "center"
              }
              } value={product.quantity} onChange={(event)=>{
                event.preventDefault();
                if (parseInt(event.currentTarget.value) > 0)
                modifyQuantity(product.id, parseInt(event.currentTarget.value));
              }}/>
              <Button onClick={(event)=>{
                event.preventDefault();
                if (product.quantity > 1)
                modifyQuantity(product.id, product.quantity-1);
              }}>-</Button>
            </div>
            <div className={classes.Quantity}>
              <p>Cantidad</p>
              <p>{product.quantity}</p>
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
            <p>{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(total)}</p>
          </div>
        </div>
        <Button fullWidth color="green" style={{ marginTop: 10 }} onClick={(event)=> {
          event.preventDefault();
          window.location.href='#';
        }}>
          Comprar
        </Button>
      </div>
    </Drawer>
  );
}
