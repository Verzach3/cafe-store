import { Select } from "@mantine/core";
import { FetchCategory } from "../Interfaces/coffeeInterface";
import { useEffect, useState } from "react";

export function DropdownButton({
  categories,
  onCategory,
  tosting_categories,
  onCategoryTostingChange
}: {
  categories: FetchCategory[];
  onCategory: (category: string) => void;
  tosting_categories: FetchCategory[];
  onCategoryTostingChange: (category: string) => void;
}) {
  const [inputValue, setInputValue] = useState("");
  const [tostingCategory, setInputValueTosting] = useState("");

  const handlerSelectValue = (value: string) => {
    if(value === null) return;
    setInputValue(value);
  };

  const handlerSelectValueTosting = (value: string) => {
    if(value === null) return;
    setInputValueTosting(value);
  };
  useEffect(() => {
    if (inputValue.trim().length <= 1) return;
    onCategory(inputValue.trim());
  }, [inputValue, onCategory]);

  useEffect(() => {
    if (tostingCategory.trim().length <= 1) return;
    onCategoryTostingChange(tostingCategory.trim());
  }, [tostingCategory, onCategoryTostingChange]);

  
  return (
    <>
      <Select
      label="Tipo de café"
      placeholder="Pick value"
      data={categories.map((item: FetchCategory) => item.name)}
      searchable
      onOptionSubmit={ handlerSelectValue }
    />

    <Select
    label="Tipo de tostado"
    placeholder="Pick value"
    data={tosting_categories.map((item: FetchCategory) => item.name)}
    searchable
    onOptionSubmit={ handlerSelectValueTosting }
  />
    </>
  );
}
