import { atom } from "jotai";
import type { ProductCart } from "../types/types";

export const cartAtom = atom([] as ProductCart[]);
