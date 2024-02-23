import "./style.css";
import { HeaderSearch } from "../Components/Header";
import { FooterLinks } from "../Components/Footer";
import { DropdownButton } from "../Components/DropdownButton";
import { Notification } from '@mantine/core';

import { Loader } from "@mantine/core";
import CardsComponent from "../Components/CardsComponent";
import useProducts from "../hooks/useProducts";
import useCategory from "../hooks/useCategory";
import { useEffect, useState } from "react";
import { FetchCategories, FetchCategory, FetchProducts, FetchTosting } from '../Interfaces/coffeeInterface';
import useTosting from "../hooks/useTosting";
import { useCategories } from "../hooks/useCategories";


export default function Home() {
  const { isLoading, category } = useCategory();
  const { categories } = useCategories();
  const { tosting_categories, tostingProduct } = useTosting();
  const { card } = useProducts();
  const [selectCards, setSelectCards] = useState<FetchProducts[]>( [] )
  const [isserch, setIsserch] = useState<FetchProducts[]>([])
  
  const onCategoryChange = async (value: string) => {
    const findId = category.find((item: FetchCategory) => item.name === value);
    const getTypeCoffee = categories.filter((item: FetchCategories) => {
      if (item.category_id === findId?.id) {
        return item.item_id;
    }});
    const data: FetchProducts[] = [];
    for (let i = 0; i < getTypeCoffee.length; i++) {
      const products = card.filter((obj : FetchProducts) => getTypeCoffee[i].item_id.includes(obj.id));
      data.push(...products);
    }
    setSelectCards(data);
  };
 
  const onCategoryTostingChange = async (value: string) => {
    const findId = tosting_categories.find((item: FetchCategory) => item.name === value);
    const getAllTosting = tostingProduct.filter((item: FetchTosting) => {
      if (item.tosting === findId?.id) {
        return item.product;
    }});
    const data: FetchProducts[] = [];
    for (let i = 0; i < getAllTosting.length; i++) {
      const products = card.filter((obj : FetchProducts) => getAllTosting[i].product.includes(obj.id));
      data.push(...products);
    }
    setSelectCards(data);
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
        <DropdownButton categories={category} onCategory={onCategoryChange} tosting_categories={tosting_categories} onCategoryTostingChange={onCategoryTostingChange}/>
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
