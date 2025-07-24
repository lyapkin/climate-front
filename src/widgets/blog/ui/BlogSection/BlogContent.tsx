"use client";
import { usePostsList } from "../../utils";
import { PostCard } from "@/src/entities/post";
import s from "./styles.module.css";
import { Skeleton } from "@/src/shared/ui/loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowButton } from "@/src/shared/ui";
import { Navigation } from "swiper/modules";
import "swiper/css";

const BlogContent = () => {
  const { data, isPending, isError } = usePostsList();

  if (isError) {
    return <div className={s.blog__content}>Что-то пошло не так</div>;
  }

  if (isPending) {
    return (
      <div className={s.blog__content_loading}>
        <Skeleton />
      </div>
    );
  }

  const content = data.results.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <PostCard post={item} />
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        tag="div"
        className={s.blog__content}
        slidesPerView={"auto"}
        navigation={{
          prevEl: ".blog__leftButton",
          nextEl: ".blog__rightButton",
          hideOnClick: true,
        }}
        modules={[Navigation]}
        spaceBetween={8}
        breakpoints={{
          1576: {
            slidesPerGroup: 3,
          },
          1052: {
            slidesPerGroup: 2,
          },
          561: {
            slidesPerView: "auto",
            spaceBetween: 8,
          },
          320: {
            slidesPerGroup: 1,
            spaceBetween: 32,
          },
        }}
      >
        {content}
      </Swiper>
      <div className={s.blog__buttons}>
        <ArrowButton className="blog__leftButton" direction="left" />
        <ArrowButton className="blog__rightButton" direction="right" />
      </div>
    </>
  );
};

export default BlogContent;
