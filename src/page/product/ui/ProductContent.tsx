import { ProductDetail } from "@/src/entities/product";
import s from "./styles.module.css";
import { ProductImgs } from "./ProductImgs";
import { ProductPrice } from "./ProductPrice";
import ProductInfo from "./ProductInfo";
import { AddToCart } from "@/src/features/cart";

const ProductContent = ({ product }: ProductDetailProps) => {
  return (
    <>
      <h1 className={s.product__title}>{product.name}</h1>
      <ProductImgs
        imgs={
          product.imgs.length > 0
            ? product.imgs
            : [{ id: 0, url: "/images/noimage.jpg" }]
        }
        alt={product.name}
        className={s.product__imgs}
      />
      <p className={s.product__code}>
        Артикул: <span>{product.code}</span>
      </p>
      <ProductInfo product={product} />
      <ProductPrice
        price={product.price}
        discount={product.discount}
        className={s.product__price}
      />
      <AddToCart itemId={product.id} className={s.product__action} />
    </>
  );
};

interface ProductDetailProps {
  product: ProductDetail;
}

export default ProductContent;
