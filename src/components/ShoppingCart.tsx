import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { ProductCart } from "../types/types";
import { transformProductCart } from "../helper/transformProducts";
import Cart from "./Cart";
import { useDisclosure } from '@mantine/hooks';

export default function ShoppingCart() {
  const { data } = useFetch("/api/collections/items/records");
  const [product, setProduct] = useState<ProductCart[]>([]);
  const [opened, { toggle }] = useDisclosure();

useEffect(() => {
    if (data) {
      const res = transformProductCart(data);
      setProduct(res);
    }
}, [data]);

  return (
    <>
     <Cart products={product} opened={opened} close={toggle}/> 
    </>
  )
}
