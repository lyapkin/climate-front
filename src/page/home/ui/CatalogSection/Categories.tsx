"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import s from "../styles.module.css";
import { Category } from "@/src/entities/category";
import { CategoryCard } from "@/src/widgets/category";
import { ArrowButton } from "@/src/shared/ui";
import { dotStyle } from "@/src/shared/components/slider";

const Categories = ({ categories }: CategoriesProps) => {
  const content = categories.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <CategoryCard category={item} />
      </SwiperSlide>
    );
  });
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        breakpoints={{
          1576: {
            slidesPerGroup: 3,
          },
          1048: {
            slidesPerGroup: 2,
          },
          320: {
            slidesPerGroup: 1,
          },
        }}
        spaceBetween={16}
        navigation={{
          nextEl: ".catalogSection__rightButton",
          prevEl: ".catalogSection__leftButton",
          hideOnClick: true,
        }}
        pagination={{
          el: `.${s.catalogSection__dots}`,
          clickable: true,
          bulletActiveClass: dotStyle.dots__item_active,
          bulletClass: dotStyle.dots__item,
          bulletElement: "button",
        }}
        slidesPerView={"auto"}
        className={s.catalogSection__catalog}
      >
        {content}
      </Swiper>
      <div className={s.catalogSection__buttons}>
        <ArrowButton className="catalogSection__leftButton" direction="left" />
        <ArrowButton
          direction="right"
          className="catalogSection__rightButton"
        />
      </div>
      <div className={s.catalogSection__dots}></div>
    </>
  );
};

interface CategoriesProps {
  categories: Category[];
}

export default Categories;
