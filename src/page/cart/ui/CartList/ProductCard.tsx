import s from "./styles.module.css";
import Image from "next/image";
import { JSX } from "react";
import Link from "next/link";
import {
  FullPrice,
  ProductAttrs,
  ProductCart,
  ResultPrice,
} from "@/src/entities/product";

const ProductCard = ({ product, action }: ProductCardProps) => {
  return (
    <article className={s.card}>
      <Link href={`/product/${product.slug}/`} className={s.card__img}>
        <Image
          src={product.img || "/images/noimage.jpg"}
          alt={product.name}
          fill
          style={{ objectFit: "contain" }}
        />
      </Link>
      <Link href={`/product/${product.slug}/`} className={s.card__title}>
        {product.name}
      </Link>
      <ProductAttrs
        attrs={product.attrs.slice(0, 3)}
        stock={product.stock}
        className={s.card__attrs}
      />
      <p className={s.card__code}>{product.code}</p>
      <div className={s.card__price}>
        <ResultPrice
          className={s.price__result}
          price={product.price}
          discount={product.discount}
        />
        <FullPrice
          className={s.price__full}
          price={product.price}
          discount={product.discount}
        />
      </div>
      <div className={s.card__action}>{action}</div>
    </article>
  );
};

interface ProductCardProps {
  product: ProductCart;
  action: JSX.Element;
}

export default ProductCard;
