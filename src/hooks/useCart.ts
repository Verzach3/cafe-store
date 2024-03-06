import { useAtom } from "jotai";
import { cartAtom } from "../lib/atoms";
import { Product, ProductCart } from "../types/types";



export default function useCart() {
    const [cart, setCart] = useAtom(cartAtom);

    const addToCart = (product: Product, quantity: number) => {
        const productInCart = cart.find((item) => item.id === product.id)
        if (productInCart) {
            const newCart = cart.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: quantity
                    }
                }
                return item
            })
            setCart(newCart)
            return
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

    return { cart, addToCart, removeFromCart, clearCart }
}



