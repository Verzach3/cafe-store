import { useEffect, useState } from "react"
import { FetchProducts } from "../Interfaces/coffeeInterface";
import { fetchProducts } from "../Api/fetchCoffee";


export default function useProducts() {
    const [card, setCard] = useState<FetchProducts[]>([])
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            const data: FetchProducts[] = await fetchProducts();
            setCard(data);
            setIsLoadingProducts(false);
        }
        getProducts();
    }, [])

  return (
    {
        isLoadingProducts,
        card,
    }
  )
}
