import { Product, Item } from "../types/types";


export const transformProduct = (item : Item[]): Product[] => {
    const transformedProducts: Product[] = item.map((product) => {
        return {
            name: product.name,
            price: product.price,
            description: product.description,
            images: window.pb.files.getUrl(product, product.images[0]),
            id: product.id
        }
    })
    return transformedProducts
};