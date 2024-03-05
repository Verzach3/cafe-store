import { useEffect, useState } from "react";
import { Item } from "../types/types";
import { coffeeApi } from "../api/poketbaseApi";

export const useFetch = (urlPrompt: string) => {
    const [data, setData] = useState<Item[]>([]);
    const [url, setUrl] = useState(urlPrompt);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        coffeeApi.get(url).then((response) => {
            setData(response.data.items);
        }).catch((error) => {
            setError(error);
        }).finally(() => setLoading(false));
    }, [url]);
    
    return { data, loading, error, setUrl };
}