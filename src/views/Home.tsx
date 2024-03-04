
import { useEffect, useState } from "react";
import { CarouselComponent } from "../Components/Carousel/Carousel";
import { FooterLinks } from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import HomePage from "../Components/HomePage/HomePage";
import useProducts from "../hooks/useProducts";
import "./style.css";
import { Product } from '../types/types';
import { transformProduct } from "../helper/transformProduct";


export default function Home() {
  
const { data } = useProducts("/api/collections/items/records");

const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
  (() => {
    if (data.length > 0) {
      const res = transformProduct(data);
      setProducts(res);
    }
  })();
}, [data]);

  return (
    <>
      <Header />
      <HomePage />
      <CarouselComponent product={products}/>
      <FooterLinks/>
    </>
  );
}
