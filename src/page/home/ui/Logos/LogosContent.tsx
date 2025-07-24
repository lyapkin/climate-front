"use client";
import { JSX } from "react";
import s from "../styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowButton } from "@/src/shared/ui";
import { Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import { useIsInteractive } from "@/src/shared/utils/client";
import { Skeleton } from "@/src/shared/ui/loading";

const LogosContent = ({ content }: LogosContentProps) => {
  const isInteractive = useIsInteractive();

  if (!isInteractive) {
    return (
      <div className={s.logos__content}>
        <Skeleton />
      </div>
    );
  }
  return (
    <>
      <Swiper
        className={s.logos__content}
        tag="div"
        modules={[Navigation, Grid]}
        spaceBetween={8}
        slidesPerView={3}
        navigation={{
          nextEl: ".logos__rightButton",
          prevEl: ".logos__leftButton",
          hideOnClick: true,
        }}
        grid={{
          rows: 2,
        }}
        breakpoints={{
          1576: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1048: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          661: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            grid: {
              rows: 1,
            },
          },
        }}
      >
        {content.map((item, i) => {
          return (
            <SwiperSlide key={i} tag="div" className={s.logos__picture}>
              {item}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={s.logos__buttons}>
        <ArrowButton className="logos__leftButton" direction="left" />
        <ArrowButton className="logos__rightButton" direction="right" />
      </div>
    </>
  );
};

interface LogosContentProps {
  content: JSX.Element[];
}

export default LogosContent;
