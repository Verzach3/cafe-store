import { rem, Select, TextInput } from '@mantine/core';
import { category_id, Item } from '../../types/types';
import { useFetch } from '../../hooks/useFetch';
import { useEffect, useState } from 'react';



export function SearchAndFilter({ onChangeProducts }: { onChangeProducts: (products: string) => void }) {
  const { data } = useFetch("/api/collections/items_categories/records?expand=category_id");
  
 

  const [categories, setCategories] = useState<string[]>([])
  const [categoriesId , setCategoriesId] = useState<category_id[]>([])
  useEffect(() => {
    (() => {
      if (data.length > 0) {
        const res = data.map((item: Item) => item.expand.category_id.name);
        const response = data.map((item: Item) => item.expand.category_id);
        const newRes = [...new Set(res)];    
        setCategoriesId(response);
        setCategories(newRes);
      }
    })();
  }, [data]);

  const select = (
    <Select
      data={ categories }
      rightSectionWidth={0.5}
      onOptionSubmit={ (value) => {
        const category = categoriesId.find((item) => item.name === value);
        onChangeProducts(category?.id || '');
      }}
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
      placeholder="Granito Café Marron..."
      label="Search Product"
      rightSection={select}
      rightSectionWidth={92}
      styles={{
        label: { color: 'white', fontSize: 12},
      }}
      size='xl'
    />
  );
}