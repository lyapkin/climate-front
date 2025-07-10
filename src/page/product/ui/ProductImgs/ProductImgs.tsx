"use client";
// import { useRef, useState } from "react";
import s from "./styles.module.css";
import Image from "next/image";
import cn from "classnames";
// import ProductPicture from "./ProductPicture";
import { ProductDetail } from "@/src/entities/product";
import { HTMLAttributes } from "react";
import SlideButton from "./SlideButton";

const ProductImgs = ({ imgs, alt, className }: ProductImgsProps) => {
  const imgsAll = imgs.map((item) => (
    <div key={item.id} className={cn(s.all__img)}>
      <Image src={item.url} fill alt={alt} objectFit="contain" />
    </div>
  ));

  return (
    <div className={cn(s.imgs, className)}>
      <div className={s.imgs__all}>{imgsAll}</div>
      <div className={s.imgs__current}>
        {/* {imgs.map((item) => (
            <ProductPicture key={item.id} url={item.url} alt={alt} />
          ))} */}
        <div className={s.current__img}>
          <Image src={imgs[0].url} fill alt={alt} objectFit="contain" />
        </div>
        <SlideButton orintation="left" />
        <SlideButton orintation="right" />
      </div>
    </div>
  );
};

interface ProductImgsProps extends HTMLAttributes<HTMLElement> {
  imgs: ProductDetail["imgs"];
  alt: string;
}

export default ProductImgs;
