import { Product } from "../../types/types";
import "./Card.css";

export default function Card({ product }: { product: Product }) {
  return (
    <>
      <div className="container">
        <div className="box-container">
          <div className="box">
            <div className="icons">
              <a href="#" className="fas fa-shopping-cart"></a>
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <img src={product.images} alt="" />
            </div>
            <div className="content">
              <h3>{product.name}</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
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
