import { FetchProducts } from "../Interfaces/coffeeInterface";
import { FeaturesCard } from "./Card";
import "./styles/CardComponent.css";


export default function CardsComponent({ cards } : {cards: FetchProducts[]}) {
  return (
    <>
      <div className="container">
        {cards.map((product: FetchProducts, index) => (
          <FeaturesCard
            key={index}
            name={product.name}
            description={product.description}
            image={window.pb.files.getUrl(product, product.images[0])}
            price={product.price}
            cardId={product.id}
          />
        ))}
      </div>
    </>
  );
}
