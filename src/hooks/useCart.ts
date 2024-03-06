import { useAtom } from "jotai";
import { cartAtom } from "../lib/atoms";
import { Product, ProductCart } from "../types/types";



export default function useCart() {
    const [cart, setCart] = useAtom(cartAtom);

    const addToCart = (product: Product, quantity: number) => {
        if (quantity <= 0) return
        const productInCart = cart.find((item) => item.id === product.id)
        if (productInCart) {
            const newCart = cart.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: quantity + item.quantity
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

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)

    return { cart, addToCart, removeFromCart, clearCart, totalQuantity }
}



