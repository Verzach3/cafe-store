import { SegmentedControl } from "@mantine/core";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import type { Item, category_id } from "../types/types";
import classes from "./GradientSegmentedControl.module.css";
export default function Filter({
	onFilterChange,
}: {
	onFilterChange: (value: string) => void;
}) {
	const [currentState, setCurrentState] = useState("Todos");
	const [categoriesId, setCategoriesId] = useState<category_id[]>([]);
	const { data } = useFetch(
		"/api/collections/items_categories/records?expand=category_id",
	);

	useEffect(() => {
		(() => {
			if (data.length > 0) {
				const response = data.map((item: Item) => item.expand.category_id);
				setCategoriesId(response);
			}
		})();
	}, [data]);

	return (
		<SegmentedControl
			radius="xl"
			size="md"
			data={["Todos", "Grano", "Molido"]}
			color="rgb(255, 242, 216)"
			classNames={classes}
			value={currentState}
			onChange={(value) => {
				if (value === "Todos") {
					setCurrentState("Todos");
					onFilterChange("Todos");
					return;
				}
				const categories = categoriesId.find((item) => item.name === value);
				onFilterChange(categories?.id || "");
				setCurrentState(value);
			}}
		/>
	);
}
