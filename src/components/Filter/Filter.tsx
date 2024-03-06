import { SegmentedControl } from "@mantine/core";
import classes from "./GradientSegmentedControl.module.css";
import { useEffect, useState } from "react";
import { Item, category_id } from "../../types/types";
import { useFetch } from "../../hooks/useFetch";
export default function GradientSegmentedControl({ onChangeProducts }: { onChangeProducts: (products: string) => void }) {
    const [value, setValue] = useState<string>("Todos");
    const [categoriesId , setCategoriesId] = useState<category_id[]>([])
    const { data } = useFetch("/api/collections/items_categories/records?expand=category_id");

  


    useEffect(() => {
        (() => {
          if (data.length > 0) {
            const response = data.map((item: Item) => item.expand.category_id);
            setCategoriesId(response);
          }
        })();
      }, [data]);


    return (
        <>  
            <SegmentedControl
                radius="xl"
                size="xl"
                data={["Todos", "Grano", "Molido"]}
                value={value}
                onChange={(value) => {
                    if (value === "Todos") {
                        onChangeProducts("Todos");
                        setValue(value);
                        return;
                    }
                    const category = categoriesId.find((item) => item.name === value);
                    onChangeProducts(category?.id || '');
                    setValue(value);
                  }
                }
                classNames={classes}
            />
            
        </>
    );
}
