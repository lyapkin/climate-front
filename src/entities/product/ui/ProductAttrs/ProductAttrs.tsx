import { ProductDetail } from "@/src/entities/product";
import s from "./styles.module.css";
import cn from "classnames";
import { HTMLAttributes } from "react";

const ProductAttrs = ({ attrs, stock, className }: ProductAttrsProps) => {
  const content = attrs.map((item) => {
    return (
      <li className={s.attrs__item} key={item.id}>
        <span className={s.attrs__name}>{item.attr}</span>
        <span className={s.attrs__value}>{item.value}</span>
      </li>
    );
  });

  return (
    <ul className={cn(s.attrs, className)}>
      {stock !== undefined && (
        <li className={s.attrs__item}>
          <span className={s.attrs__name}>Наличие</span>
          <span
            className={cn(s.attrs__value, {
              [s.attrs__stock]: stock,
            })}
          >
            {stock ? "В наличии" : "Под заказ"}
          </span>
        </li>
      )}
      {content}
    </ul>
  );
};

interface ProductAttrsProps extends HTMLAttributes<HTMLElement> {
  attrs: ProductDetail["attrs"];
  stock?: boolean;
}

export default ProductAttrs;
