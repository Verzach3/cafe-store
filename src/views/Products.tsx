import { useEffect, useState } from "react";
import { FooterLinks } from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import useProducts from "../hooks/useProducts";
import { Item, Product } from "../types/types";
import { transformProduct } from "../helper/transformProduct";
import Card from "../Components/Cards/Card";
import { Loader } from "@mantine/core";
import { SearchAndFilter } from "../Components/Filter/SearchAndFilter";
import { coffeeApi } from "../Api/poketbaseApi";


export default function Products() {
  const { data, loading } = useProducts("/api/collections/items/records");
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    (() => {
      if (data.length > 0) {
        const res = transformProduct(data);
        setProducts(res);
      }
    })();
  }, [data]);

  const onChangeProducts = (id: string) => {
    setIsLoading(true);
    const products: Item[] = [];
    let data;
    if (!id) return;
    coffeeApi.get(`/api/collections/items_categories/records?filter=(category_id='${id}' )&expand=item_id`)
    .then((response) => {
      products.push(...response.data.items);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      if (!products) return;
      data = products.map((product) => {
        return {
          name: product.expand.item_id.name,
          price: product.expand.item_id.price,
          description: product.expand.item_id.description,
          images: window.pb.files.getUrl(product.expand.item_id, product.expand.item_id.images[0]),
          id: product.expand.item_id.id
        }
      });
      setProducts(data);
      setIsLoading(false);
    });
  }
  
  return (
    <>
      <Header />
      <div className="filter">
        <SearchAndFilter onChangeProducts={onChangeProducts} />
      </div>
      {loading || isLoading ? (
        <div className="loader">
          <Loader color="blue" size="lg" type="bars"/>
        </div>
      ) : (
        <section className="products" id="products">
          {products.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </section>
      )}
      <FooterLinks />
    </>
  );
}
