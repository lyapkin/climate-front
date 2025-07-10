import Link from "next/link";
import s from "./styles.module.css";
import Image from "next/image";
import Discount from "./Discount";
import Stock from "./Stock";
import {
  ProductAttrs,
  ProductPreview,
  ResultPrice,
} from "@/src/entities/product";
import AddToCart from "@/src/features/cart/AddToCart/AddToCart";

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className={s.card}>
      <div className={s.card__image}>
        <Link href={`/product/${product.slug}/`}>
          <Discount discount={product.discount} />
          <Image
            src={product.img || "/images/noimage.jpg"}
            fill
            style={{ objectFit: "cover" }}
            alt={product.name}
          />
          <Stock stock={product.stock} />
        </Link>
      </div>
      <p className={s.card__title}>
        <Link href={`/product/${product.slug}/`}>{product.name}</Link>
      </p>
      <ProductAttrs
        attrs={product.attrs.slice(0, 3)}
        className={s.card__attrs}
      />
      <div className={s.card__price}>
        <span className={s.price__title}>Стоимость</span>
        <ResultPrice
          price={product.price}
          discount={product.discount}
          className={s.price__value}
        />
      </div>
      <div className={s.card__action}>
        <AddToCart itemId={product.id} />
      </div>
    </article>
  );
};

interface ProductCardProps {
  product: ProductPreview;
}

export default ProductCard;
