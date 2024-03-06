
import { useEffect, useState } from "react";
import { CarouselComponent } from "../components/Carousel/Carousel";
import HomePage from "../components/HomePage/HomePage";
import useProducts from "../hooks/useProducts";
import "./style.css";
import { Product } from '../types/types';
import { transformProduct } from "../helper/transformProduct";
import {FooterLinks} from "../components/Footer/Footer.tsx";




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
      <HomePage />
      <CarouselComponent product={products}/>
      <FooterLinks/>
    </>
  );
}
