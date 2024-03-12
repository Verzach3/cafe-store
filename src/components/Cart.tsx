import { ProductCart } from '../types/types';
import "./styles/Cart.css";

  const ShoppingCart = ({product}: {product: ProductCart[]}) => {
    return (
      <div className="shopping-cart">
        <ul>
          {product.map((item) => (
            <li key={item.name}>
              <div className="cart-item">
                <div className="item-image">
                  <img src={item.images} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>
                    {"marrón"} - {2}
                  </p>
                  <p>${item.price}</p>
                  <p>In Stock: {10}</p>
                  <div className="item-quantity">
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="order-summary">
          <p>Subtotal: ${200}</p>
          <p>Shipping Estimate: ${10}</p>
          <p>Tax Estimate: ${19}</p>
          <p>Order Total: ${25}</p>
          <button>Checkout</button>
        </div>
      </div>
    );
  };
  
  export default ShoppingCart;
  