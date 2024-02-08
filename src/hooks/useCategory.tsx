import { useEffect, useState } from "react";
import { FetchCategory } from "../Interfaces/coffeeInterface";
import { fetchCategory } from "../Api/fetchCoffee";

export default function useCategory() {
  const [category, setcategory] = useState<FetchCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getCategories = async () => {
      const data: FetchCategory[] = await fetchCategory();
      setcategory(data);
      setIsLoading(false);
    };
    getCategories();
  }, []);

  return { category, isLoading };
}
