import { ProductDetail } from "@/src/entities/product";
import s from "./styles.module.css";
import cn from "classnames";
import { HTMLAttributes } from "react";

const ProductAttrs = ({ attrs, stock, className }: ProductAttrsProps) => {
  const content = attrs.map((item) => {
    return (
      <li className={s.attrs__item} key={item.id}>
        <span className={s.attrs__name}>{item.attr.name}</span>
        <span className={s.attrs__values}>
          {item.values.map((val, i) => (
            <span className={s.attrs__valueItem} key={val.id}>
              {val.name}
              {i !== item.values.length - 1 ? "; " : null}
            </span>
          ))}
          {item.attr.unit && (
            <>
              {" "}
              <span dangerouslySetInnerHTML={{ __html: item.attr.unit }} />
            </>
          )}
        </span>
      </li>
    );
  });

  return (
    <ul className={cn(s.attrs, className)}>
      {stock !== undefined && (
        <li className={s.attrs__item}>
          <span className={s.attrs__name}>Наличие</span>
          <span
            className={cn(s.attrs__values, {
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
