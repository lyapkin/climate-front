import s from "./styles.module.css";
import { ProductDetail } from "@/src/entities/product/model/types";
import { FullPrice, ResultPrice } from "@/src/entities/product";
import { HTMLAttributes } from "react";
import cn from "classnames";

const ProductPrice = ({ price, discount, className }: ProductPriceProps) => {
  return (
    <div className={cn(s.price, className)}>
      <span className={s.price__title}>Стоимость</span>
      <ResultPrice
        className={s.price__result}
        price={price}
        discount={discount}
      />
      <FullPrice className={s.price__full} price={price} discount={discount} />
    </div>
  );
};

interface ProductPriceProps extends HTMLAttributes<HTMLElement> {
  price: ProductDetail["price"];
  discount: ProductDetail["discount"];
}

export default ProductPrice;
