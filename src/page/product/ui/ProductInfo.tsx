"use client";
import { useState } from "react";
import s from "./styles.module.css";
import "@/src/shared/styles/ck.css";
import { ProductDocs } from "./ProductDocs";
import { ProductAttrs, ProductDetail } from "@/src/entities/product";
import cn from "classnames";

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [shown, setShown] = useState(0);

  return (
    <>
      <div className={cn(s.product__controls, s.controls)}>
        <button
          className={cn(s.controls__button, {
            [s.controls__button_active]: shown === 0,
          })}
          onClick={() => setShown(0)}
        >
          Характеристики
        </button>
        <button
          className={cn(s.controls__button, {
            [s.controls__button_active]: shown === 1,
          })}
          onClick={() => setShown(1)}
        >
          Описание
        </button>
        <button
          className={cn(s.controls__button, {
            [s.controls__button_active]: shown === 2,
          })}
          onClick={() => setShown(2)}
        >
          Документация
        </button>
      </div>
      {shown === 0 && (
        <ProductAttrs
          attrs={product.attrs}
          stock={product.stock}
          className={s.product__attrs}
        />
      )}
      {shown === 1 && (
        <div
          className={cn(s.product__description, s.description, "ck")}
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      )}
      {shown === 2 && (
        <ProductDocs docs={product.docs} className={s.product__docs} />
      )}
    </>
  );
};

interface ProductInfoProps {
  product: ProductDetail;
}

export default ProductInfo;
