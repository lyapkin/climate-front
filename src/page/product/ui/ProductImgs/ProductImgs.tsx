"use client";
import s from "./styles.module.css";
import Image from "next/image";
import cn from "classnames";
import ProductPicture from "./ProductPicture";
import { ProductDetail } from "@/src/entities/product";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import SlideButton from "./SlideButton";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

const ProductImgs = ({ imgs, alt, className }: ProductImgsProps) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideTo(currentSlideIndex);
  }, [currentSlideIndex]);

  const imgsAll = imgs.map((item, i) => (
    <div
      key={item.id}
      className={cn(s.all__img, {
        [s.all__img_active]: currentSlideIndex === i,
      })}
      onClick={() => setCurrentSlideIndex(i)}
    >
      <Image src={item.url} fill alt={alt} objectFit="contain" />
    </div>
  ));

  const content = imgs.map((item) => {
    return (
      <SwiperSlide tag="div" key={item.id} className={s.current__img}>
        <ProductPicture key={item.id} url={item.url} alt={alt} />
      </SwiperSlide>
    );
  });

  return (
    <div className={cn(s.imgs, className)}>
      <div className={s.imgs__all}>{imgsAll}</div>
      <Swiper
        tag="div"
        className={s.imgs__current}
        modules={[Navigation]}
        navigation={{
          prevEl: ".productPicture__leftButton",
          nextEl: ".productPicture__rightButton",
          hideOnClick: true,
        }}
        onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
        ref={swiperRef}
      >
        {content}
        <SlideButton orintation="left" className="productPicture__leftButton" />
        <SlideButton
          orintation="right"
          className="productPicture__rightButton"
        />
      </Swiper>
    </div>
  );
};

interface ProductImgsProps extends HTMLAttributes<HTMLElement> {
  imgs: ProductDetail["imgs"];
  alt: string;
}

export default ProductImgs;
