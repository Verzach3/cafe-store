import { Select } from "@mantine/core";
import { FetchCategory } from "../Interfaces/coffeeInterface";

export function DropdownButton({
  categories,
  tosting_categories,
  toastingSetter,
  categorySetter,
}: {
  categories: FetchCategory[];
  tosting_categories: FetchCategory[];
  toastingGetter: string,
  toastingSetter: React.Dispatch<React.SetStateAction<string>>,
  categoryGetter: string,
  categorySetter: React.Dispatch<React.SetStateAction<string>>,
}) {

  
  return (
    <>
      <Select
      label="Tipo de café"
      placeholder="Pick value"
      data={categories.map((item: FetchCategory) => item.name)}
      onSearchChange={(val) => categorySetter(val)}
      searchable
      onOptionSubmit={(val) => categorySetter(val) }
    />

    <Select
    label="Tipo de tostado"
    placeholder="Pick value"
    onOptionSubmit={(val) => toastingSetter(val)}
    onSearchChange={(val) => toastingSetter(val)}
    data={tosting_categories.map((item: FetchCategory) => item.name)}
    searchable
  />
    </>
  );
}
