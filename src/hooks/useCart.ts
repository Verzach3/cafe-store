import { useAtom } from "jotai";
import { cartAtom } from "../lib/atoms";
import { Product, ProductCart } from "../types/types";
import { notifications } from "@mantine/notifications";


export default function useCart() {
    const [cart, setCart] = useAtom(cartAtom);

    const addToCart = (product: Product, quantity: number) => {
    
        const productInCart = cart.find((item) => item.id === product.id)
        if (productInCart) {
            notifications.show({
                title: '❌ Error!',
                message: 'El producto ya ha sido añadido al carrito de compras.',
              })
            return
        } else {
            notifications.show({
                title: '✅ Producto añadido al carrito!',
                message: 'El producto ha sido añadido al carrito de compras. 🛒',
              })
        }

        setCart([...cart, { ...product, quantity } as ProductCart]);
    }

    const removeFromCart = (id: string) => {
        const newCart = cart.filter((item) => item.id !== id)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const modifyQuantity = (id: string, quantity: number) => {
        const newCart = cart.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity
                }
            }
            return item
        })
        setCart(newCart)
    }


    return { cart, addToCart, removeFromCart, clearCart, modifyQuantity}
}