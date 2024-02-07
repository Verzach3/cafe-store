import { useEffect, useState } from "react";
import { FeaturesCard } from "../Components/Card";
import "./style.css";
import { HeaderSimple } from "../Components/Header";
import { FooterLinks } from "../Components/Footer";
import { DropdownButton } from "../Components/DropdownButton";
export default function Home() {
  const [cards, setcards] = useState([]);

  type Product = {
    name: string;
    description: string;
    images: string;
    price: number;
  };


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await window.pb.collection("items").getFullList();

      const products = response.map((product: any) => {
        return {
          name: product.name,
          description: product.description,
          images: product.image,
          price: product.price,
        };
      });

      setcards([...products]);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <HeaderSimple />

      <div className="searchProduct">
        <DropdownButton />
      </div>
      <div className="container">
        {cards.map((product: Product, index) => (
          <FeaturesCard
            key={index}
            name={product.name}
            description={product.description}
            image={product.images}
            price={product.price}
          />
        ))}
      </div>
      <FooterLinks />
    </>
  );
}
