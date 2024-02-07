import { MultiSelect } from '@mantine/core';
import { useEffect, useState } from 'react';

export function DropdownButton() {
  //const [product, setproduct] = useState([])
  const [categories, setcategories] = useState<string[]>([])

  const handlerProduct = async () => {
    console.log("Searching...")
  }

 
  
  //TODO: fetch the product based on the category selected
  useEffect(() => {
    const fetchItemCategories = async () => {
      const records = await window.pb.collection('categories').getFullList();
      const data = records.map((record: any) =>  record.name);
      setcategories(data);
    }
    fetchItemCategories();
  }, []);



  return (
    <MultiSelect
      label="Filter products"
      placeholder="Search Product"
      data={categories}
      searchable
      onOptionSubmit={ handlerProduct }
    />
  );
}