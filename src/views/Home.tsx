import "./style.css";
import { HeaderSearch } from "../Components/Header";
import { FooterLinks } from "../Components/Footer";
import { DropdownButton } from "../Components/DropdownButton";
import { Notification } from '@mantine/core';

import { Loader } from "@mantine/core";
import CardsComponent from "../Components/CardsComponent";
import useProducts from "../hooks/useProducts";
import useCategory from "../hooks/useCategory";
import { useCategories } from "../hooks/useCategories";
import { useEffect, useState } from "react";
import { FetchCategories, FetchProducts } from "../Interfaces/coffeeInterface";


export default function Home() {
  const { isLoading, category } = useCategory();
  const { categories } = useCategories();
  const { card } = useProducts();
  const [selectCards, setSelectCards] = useState<FetchProducts[]>( [] )
  const [isserch, setIsserch] = useState<FetchProducts[]>([])

  const onCategoryChange = async (value: string) => {
    const filteredProductsId = category.map((product) => {
      if (product.name === value) {
        return product.id;
      }
    });
    const filteredProducts = categories.filter((product) => {
      if (filteredProductsId.includes(product.category_id)) {
        return product;
      }
    });
    const products = card.filter((product: FetchProducts) => {
      if (filteredProducts.find((item: FetchCategories) => item.item_id === product.id)) {
        return product;
      }
    });

    setSelectCards(products);
  };

  const onSearch = (id : string) => {
    const product = card.filter((product: FetchProducts) => product.name.toLowerCase().includes(id.toLowerCase()));
    setIsserch(product)
    setSelectCards(product);
  }

  useEffect(() => {
    setSelectCards(card)
  }, [card])


  useEffect(() => {
    setSelectCards(isserch)
  }, [isserch])


  return (
    <>
      <HeaderSearch onSearch={ onSearch }/>
      <div className="searchProduct">
        <DropdownButton categories={category} onCategory={onCategoryChange} />
      </div>
      {isLoading ? (
        <div className="Loader">
          <Loader size={50} />
        </div>
      ) : null}

      {
        !isLoading && selectCards.length === 0 ? (
          <div className="noProduct">
            <Notification withBorder color="rgba(0, 0, 0, 1)" title="Product does not exist">
              The product you are trying to find does not exist or has been removed.
            </Notification>
          </div>
        ) : null
      }
      <CardsComponent cards={selectCards} />
      <FooterLinks />
    </>
  );
}
