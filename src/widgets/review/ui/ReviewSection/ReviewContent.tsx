"use client";
import { Review, ReviewCard } from "@/src/entities/review";
import s from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowButton } from "@/src/shared/ui";
import { Navigation } from "swiper/modules";
import "swiper/css";

const ReviewContent = ({ reviews }: Props) => {
  const content = reviews.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <ReviewCard review={item} />
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        tag="div"
        className={s.review__content}
        modules={[Navigation]}
        slidesPerView={"auto"}
        navigation={{
          prevEl: ".review__leftButton",
          nextEl: ".review__rightButton",
          hideOnClick: true,
        }}
        breakpoints={{
          1576: {
            slidesPerGroup: 4,
          },
          1200: {
            slidesPerGroup: 3,
          },
          700: {
            slidesPerGroup: 2,
          },
          460: {
            slidesPerView: "auto",
            spaceBetween: 4,
          },
          320: {
            slidesPerGroup: 1,
            spaceBetween: 24,
          },
        }}
      >
        {content}
      </Swiper>
      <div className={s.review__buttons}>
        <ArrowButton className="review__leftButton" direction="left" />
        <ArrowButton className="review__rightButton" direction="right" />
      </div>
    </>
  );
};

interface Props {
  reviews: Review[];
}

export default ReviewContent;
