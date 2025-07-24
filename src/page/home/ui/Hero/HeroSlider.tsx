"use client";
import Image from "next/image";
import s from "../styles.module.css";
import cn from "classnames";
import LongArrowIcon from "@/src/shared/icons/LongArrowIcon";
import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        className={s.hero__slider}
        modules={[
          Navigation,
          EffectFade,
          // Autoplay
        ]}
        // loop={true}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
        navigation={{
          prevEl: `.${s.sliderButtons__back}`,
          nextEl: `.${s.sliderButtons__forward}`,
          hideOnClick: true,
        }}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <Image
              src={item}
              alt="Кондиционер"
              fill
              style={{ objectFit: "contain" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={s.hero__sliderButtons}>
        <button className={cn(s.sliderButtons__button, s.sliderButtons__back)}>
          <LongArrowIcon />
          <span>Назад</span>
        </button>
        <button
          className={cn(s.sliderButtons__button, s.sliderButtons__forward)}
        >
          <span>Далее</span>
          <LongArrowIcon />
        </button>
      </div>
    </>
  );
};

const data = [
  "/images/home/hero/slider/1.png",
  "/images/product/1.png",
  "/images/home/hero/slider/1.png",
];

export default HeroSlider;
