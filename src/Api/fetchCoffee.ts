import { FetchCategories, FetchCategory, FetchProducts } from "../Interfaces/coffeeInterface";




export const fetchCategory = async () : Promise<FetchCategory[]> => {
    const response = await window.pb.collection<FetchCategory>("categories").getFullList();
    return response;
}

export const fetchCategoriesById = async (id: string) : Promise<FetchCategories[]> => {
    const response = await window.pb.collection<FetchCategories>("items_categories").getFullList({
        where: [
            ["category_id", "==", id]
        ]
    });

    return transformCategories(response);
}

export const fetchCategories = async () : Promise<FetchCategories[]> => {
    const response = await window.pb.collection<FetchCategories>("items_categories").getFullList();
    return transformCategories(response);
}


export const fetchProducts = async () : Promise<FetchProducts[]> => {
    const response = await window.pb.collection<FetchProducts>("items").getFullList();
    return response;
}


export const fetchProductsById = async (id: string)  => {
    const record = await window.pb.collection('items').getOne(id);
    return record;
}

const transformCategories = (data: FetchCategories[]) : FetchCategories[] => {
    return data.map((item) => {
        return {
            category_id: item.category_id,
            item_id: item.item_id,
        }
    })
}
