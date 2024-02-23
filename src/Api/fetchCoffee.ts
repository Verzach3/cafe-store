import { FetchCategories, FetchCategory, FetchProducts, FetchTosting } from "../Interfaces/coffeeInterface";




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

export const getTostingCategories = async () : Promise<FetchTosting[]> => {
    const response = await window.pb.collection<FetchTosting>('toasting_items').getFullList();
    return transformTosting(response);
}


export const fetchProducts = async () : Promise<FetchProducts[]> => {
    const response = await window.pb.collection<FetchProducts>("items").getFullList();
    return response;
}


export const fetchProductsById = async (id: string)  => {
    const record = await window.pb.collection('items').getOne(id);
    return record;
}

export const fetchTosting = async () : Promise<FetchCategory[]> => {
    const records = await window.pb.collection<FetchCategory>('toasting_type').getFullList();
    return records;
}

const transformCategories = (data: FetchCategories[]) : FetchCategories[] => {
    return data.map((item) => {
        return {
            category_id: item.category_id,
            item_id: item.item_id,
        }
    })
}


const transformTosting = (data: FetchTosting[]) : FetchTosting[] => {
    return data.map((item) => {
        return {
            collectionId: item.collectionId,
            id: item.id,
            product: item.product,
            tosting: item.tosting,
        }
    })
}
