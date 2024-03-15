import { atom } from 'jotai'
import { ProductCart } from '../types/types';

export const cartAtom = atom([] as ProductCart[])