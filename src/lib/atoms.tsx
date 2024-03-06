import { atom } from 'jotai'
import { ProductCart } from '../types/types';

export const cartAtom = atom([] as ProductCart[])

// export const cartItemsQuantityAtom = atom((get) => {
//     return get(cartAtom).reduce((acc, item) => acc + item.Quantity, 0)
// })