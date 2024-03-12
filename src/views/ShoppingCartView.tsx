import { useEffect, useState } from "react";
import ShoppingCart from "../components/Cart";
import useFetch from "../hooks/useFetch";
import { ProductCart } from "../types/types";
import { transformProductCart } from "../helper/transformProducts";


export default function ShoppingCartView() {
  const { data } = useFetch("/api/collections/items/records");
  const [product, setProduct] = useState<ProductCart[]>([]);

useEffect(() => {
    if (data) {
      const res = transformProductCart(data);
      setProduct(res);
    }
}, [data]);

  return (
    <>
     <ShoppingCart product={product} /> 
    </>
  )
}
