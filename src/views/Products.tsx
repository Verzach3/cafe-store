import { useEffect, useState } from "react";
import { Center, Group, Pagination } from "@mantine/core";
import { Product, Item } from "../types/types";
import { transformProduct } from "../helper/transformProducts";
import Card from "../components/Card";
import { HeroImageBackground } from "../components/HeroImageBackground";

import classes from "./Products.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { coffeeApi } from "../api/coffeApi";
import Filter from "../components/Filter";
import { Loader } from "@mantine/core";

export default function Products() {
	const [product, setProduct] = useState<Product[]>([]);
	const [totalPages, setTotalPages] = useState(1);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const { search } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const initialPage = new URLSearchParams(search).get("page");
		const pageNumber = parseInt(initialPage || "1", 10);
		setPage(pageNumber);
		setLoading(true);
		const fetchData = async (page: number) => {
			coffeeApi
				.get(`/api/collections/items/records?page=${page}&perPage=12`)
				.then((response) => {
					const data = transformProduct(response.data.items);
					setProduct(data);
					setTotalPages(response.data.totalPages);
				})
				.finally(() => {
					window.scrollTo(0, 0);
					setLoading(false);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		fetchData(pageNumber);
	}, [search]);

	const onFilterChange = (id: string) => {
		setLoading(true);
		if (id === "Todos") {
			coffeeApi
				.get("/api/collections/items/records")
				.then((response) => {
					const data = transformProduct(response.data.items);
					setProduct(data);
					setTotalPages(response.data.totalPages);
				})
				.finally(() => {
					setLoading(false);
				});
			return;
		}
		const data: Item[] = [];
		coffeeApi
			.get(
				`/api/collections/items_categories/records?expand=item_id&filter=(category_id="${id}")`,
			)
			.then((response) => {
				data.push(...response.data.items);
			})
			.finally(() => {
				const newProduct = data.map((item) => {
					return {
						id: item.expand.item_id.id,
						name: item.expand.item_id.name,
						price: item.expand.item_id.price,
						description: item.expand.item_id.description,
						images: window.pb.files.getUrl(
							item.expand.item_id,
							item.expand.item_id.images[0],
						),
						previous_value: item.expand.item_id.previous_value,
					};
				});
				setProduct(newProduct);
				setLoading(false);
			});
	};

	return (
		<div className={classes.Product} style={{
      paddingBottom: "5rem"
    }}>
			<HeroImageBackground />
			<div className={classes.Filter}>
				<Filter onFilterChange={onFilterChange} />
			</div>
			{product.length === 0 && !loading && (
				<>
					<div className={classes.NoProducts}>
						<h1>❌ No hay productos disponibles!</h1>
					</div>
				</>
			)}
			<Group grow>
				{!loading && (
					<div className={classes.gridCards}>
						{product.map((product) => (
							<div className={classes.Cards} key={product.id}>
								<Card product={product} key={product.id} />
							</div>
						))}
					</div>
				)}
			</Group>
			{loading && (
				<Center pb={"15rem"}>
					<Loader color="#eae0d5" type="dots" />
				</Center>
			)}
			{/* <Pagination
        value={page}
        onChange={(value) => {
          setPage(value);
          navigate(`/products?page=${value}`);
        }}
        total={totalPages}
        className={classes.Pagination}
      /> */}
		</div>
	);
}
