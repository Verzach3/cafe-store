import { useEffect, useState } from "react";
import { fetchTosting, getTostingCategories } from '../Api/fetchCoffee';
import { FetchCategory, FetchTosting } from "../Interfaces/coffeeInterface";


export default function useTosting() {

    const [tosting_categories, setCategories] = useState<FetchCategory[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [tostingProduct, setTostingProduct] = useState<FetchTosting[]>([]);

    useEffect(() => {
        const getCategories = async () => {
            const data: FetchCategory[] = await fetchTosting();
            setCategories(data);
            const tosting: FetchTosting[] = await getTostingCategories();
            setTostingProduct(tosting);
            setIsLoading(false);
        }
        getCategories();
    }
    , []);

    return { isLoading, tosting_categories, tostingProduct };
}
