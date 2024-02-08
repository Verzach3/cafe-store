import { useEffect, useState } from "react";
import { FetchCategories } from "../Interfaces/coffeeInterface";
import { fetchCategories } from "../Api/fetchCoffee";



export const useCategories = () => {
    const [categories, setCategories] = useState<FetchCategories[]>([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const getCategories = async () => {
            const data: FetchCategories[] = await fetchCategories();
            setCategories(data);
            setIsLoading(false);
        }
        getCategories();
    }
    , []);

    return { isLoading, categories };
}