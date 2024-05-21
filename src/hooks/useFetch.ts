import { useEffect, useState } from "react";
import { coffeeApi } from "../api/coffeApi";
import type { Item } from "../types/types";

export default function useFetch(url: string): {
	data: Item[];
	loading: boolean;
	error: boolean;
} {
	const [data, setData] = useState<Item[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	useEffect(() => {
		coffeeApi
			.get(url)
			.then((response) => {
				setData(response.data.items);
			})
			.finally(() => setLoading(false))
			.catch(() => {
				setError(true);
				setLoading(false);
			});
	}, [url]);
	return { data, loading, error };
}
