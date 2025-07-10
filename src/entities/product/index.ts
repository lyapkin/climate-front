import {
  type ProductPreview,
  type ProductDetail,
  type ProductBase,
  type ProductCartResponse,
  type ProductCart,
} from "./model";
import { FullPrice, ResultPrice, ProductAttrs } from "./ui";
import { getProductDetailApi } from "./api";
import { applyDiscountToPrice } from "./utils";

export {
  ProductPreview,
  ProductDetail,
  ProductBase,
  ProductCartResponse,
  ProductCart,
  FullPrice,
  ResultPrice,
  getProductDetailApi,
  ProductAttrs,
  applyDiscountToPrice,
};
