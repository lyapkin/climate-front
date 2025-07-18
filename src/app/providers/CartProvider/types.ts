import { ProductBase } from "@/src/entities/product";
import { Dispatch, SetStateAction } from "react";

export interface CartContext {
  plusItem: (id: ProductBase["id"]) => void;
  minusItem: (id: ProductBase["id"]) => void;
  removeItem: (id: ProductBase["id"]) => void;
  setCart: Dispatch<SetStateAction<Record<number, number> | undefined>>;
  cart?: Record<ProductBase["id"], number>;
}
