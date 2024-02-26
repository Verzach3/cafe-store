import { Select, rem, TextInput } from '@mantine/core';
import useTosting from '../hooks/useTosting';
import useCategory from '../hooks/useCategory';
import { useEffect, useState } from 'react';




export function SearchAndFilter() {
  const { tosting_categories } = useTosting();
  const { category } = useCategory();
  const [categories, setcategories] = useState(tosting_categories)
  useEffect(() => {
    setcategories([...tosting_categories, ...category])
  }, [tosting_categories, category]);
  const select = (
    <Select
      data={categories.map((item) => item.name)}
      rightSectionWidth={28}
      styles={{
        input: {
          fontWeight: 500,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          width: rem(92),
          marginRight: rem(-2),
        },
      }}
    />
  );

  return (
    <TextInput
      type="text"
      placeholder="Granito Marron - Molido"
      label="Search products"
      rightSection={select}
      rightSectionWidth={92}
    />
  );
}