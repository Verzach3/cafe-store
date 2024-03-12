import { useEffect, useState } from "react";
import { SimpleGrid } from "@mantine/core";
import { Pagination } from "@mantine/core";
import { Product, Item } from "../types/types";
import { transformProduct } from "../helper/transformProducts";
import Card from "../components/Card";
import { HeroImageBackground } from "../components/HeroImageBackground";

import classes from "./Products.module.css";
import { useNavigate } from "react-router-dom";
import { coffeeApi } from "../api/coffeApi";
import Filter from "../components/Filter";
import { Loader } from "@mantine/core";

export default function Products() {
  const [product, setProduct] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const history = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchData = async (page: number) => {
      coffeeApi
        .get(`/api/collections/items/records?page=${page}&perPage=`)
        .then((response) => {
          const data = transformProduct(response.data.items);
          setProduct(data);
          setTotalPages(response.data.totalPages);
          history(`/products?page=${page}`);
        })
        .finally(() => {
          window.scrollTo(0, 0);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData(page);
  }, [page, history]);

  const onFilterChange = (id: string) => {
    setLoading(true);
    if (id === "Todos") {
      coffeeApi
        .get("/api/collections/items/records")
        .then((response) => {
          const data = transformProduct(response.data.items);
          setProduct(data);
          setTotalPages(response.data.totalPages);
          history(`/products`);
        })
        .finally(() => {
          setLoading(false);
        });
      return;
    }
    const data: Item[] = [];
    coffeeApi
      .get(
        `/api/collections/items_categories/records?expand=item_id&filter=(category_id="${id}")`
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
              item.expand.item_id.images[0]
            ),
            previous_value: item.expand.item_id.previous_value,
          };
        });
        setProduct(newProduct);
        //history(`/products/category/${id}`);
        setLoading(false);
      });
  };

  return (
    <div className={classes.Product}>
      <HeroImageBackground />
      <div className={classes.Filter}>
        <Filter onFilterChange={onFilterChange} />
      </div>
      {loading ? (
        <Loader color="rgb(17, 57, 70)" type="dots" className={classes.Loader}/>
      ) : (
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing={{ base: 10, sm: "xl" }}
          verticalSpacing={{ base: "md", sm: "xs" }}
        >
          {product.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </SimpleGrid>
      )}
      <Pagination
        value={page}
        onChange={setPage}
        total={totalPages}
        className={classes.Pagination}
      />
    </div>
  );
}
