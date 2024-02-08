import { Select } from "@mantine/core";
import { FetchCategory } from "../Interfaces/coffeeInterface";
import { useEffect, useState } from "react";

export function DropdownButton({
  categories,
  onCategory,
}: {
  categories: FetchCategory[];
  onCategory: (category: string) => void;
}) {
  const [inputValue, setInputValue] = useState("");

  const handlerSelectValue = (value: string) => {
    if (inputValue !== value) {
      setInputValue(value);
    }
    return;
  };

  useEffect(() => {
    if (inputValue.trim().length <= 1) return;
    onCategory(inputValue.trim());
  }, [inputValue]);

  return (
    <Select
      label="Filter by category"
      placeholder="Pick value"
      data={categories.map((item: FetchCategory) => item.name)}
      searchable
      onChange={handlerSelectValue}
    />
  );
}
