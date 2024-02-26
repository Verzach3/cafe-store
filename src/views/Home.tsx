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
import { FetchProducts, FetchCategory } from '../Interfaces/coffeeInterface';
import useTosting from "../hooks/useTosting";
import { fetchCategoriesById, fetchTostingById } from "../Api/fetchCoffee";
import { SearchAndFilter } from "../Components/SearchAndFilter";



export default function Home() {
  const { isLoading, category } = useCategory();
  const { tosting_categories } = useTosting();
  const { card } = useProducts();
  const [selectCards, setSelectCards] = useState<FetchProducts[]>( [] )
  const [isserch, setIsserch] = useState<FetchProducts[]>([])
  const [selectedToasting, setSelectedToasting] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  const onSearch = (id : string) => {
    const product = card.filter((product: FetchProducts) => product.name.toLowerCase().includes(id.toLowerCase()));
    setIsserch(product)
    setSelectCards(product);
  }

  
useEffect(() => {
  const onFilterTosting = async (id: string) => {
    if (id === "") {
      setSelectCards(card);
      return;
    }
    const findId = tosting_categories.find((item: FetchCategory) => item.name === id);
    if (!findId) return;
    const response = await fetchTostingById(findId.id);
    const data: FetchProducts[] = [];
    for (let i = 0; i < response.length; i++) {
      const products = card.filter((obj : FetchProducts) => response[i].product.includes(obj.id));
      data.push(...products);
    }
    setSelectCards(data);
  }
  onFilterTosting(selectedToasting)
}, [selectedToasting, tosting_categories, card])


useEffect(() => {
  const onFilterCategory = async (id: string) => {
    if (id === "") {
      setSelectCards(card);
      return;
    }
    const findId = category.find((item: FetchCategory) => item.name === id);
    if (!findId) return;
    const response = await fetchCategoriesById(findId.id);
    const data: FetchProducts[] = [];
    for (let i = 0; i < response.length; i++) {
      const products = card.filter((obj : FetchProducts) => obj.id === response[i].item_id);
      data.push(...products);
    }
    setSelectCards(data);
  }
  onFilterCategory(selectedCategory)
}, [selectedCategory, category, card])


  
  useEffect(() => {
    setSelectCards(card)
  }, [card])

    
  useEffect(() => {
    setSelectCards(isserch)
  }, [isserch])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <HeaderSearch onSearch={ onSearch }/>
      <div className="searchProduct">
        {
          isMobile ? (
            <SearchAndFilter/>
            ) : (
            <DropdownButton categories={category} tosting_categories={tosting_categories} toastingGetter={selectedToasting} toastingSetter={setSelectedToasting} categoryGetter={ selectedCategory } categorySetter={ setSelectedCategory }/>
          )
        }
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
