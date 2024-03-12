import { Product, Item, ProductCart } from "../types/types";


export const transformProduct = (item : Item[]): Product[] => {
    const transformedProducts: Product[] = item.map((product) => {
        return {
            name: product.name,
            price: product.price,
            description: product.description,
            images: window.pb.files.getUrl(product, product.images[0]),
            id: product.id,
            previous_value: product.previous_value
        }
    })
    return transformedProducts
};


export const transformProductCart = (item : Item[]): ProductCart[] => {
    const transformedProducts: ProductCart[] = item.map((product) => {
        return {
            name: product.name,
            price: product.price,
            description: product.description,
            images: window.pb.files.getUrl(product, product.images[0]),
            id: product.id,
            previous_value: product.previous_value,
            quantity: 10
        }
    })
    return transformedProducts
};