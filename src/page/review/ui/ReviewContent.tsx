"use client";
import {
  ReviewCard,
  ReviewCardSkeleton,
  useReviews,
} from "@/src/entities/review";
import s from "./styles.module.css";
import { emptyArr } from "@/src/shared/utils";

const ReviewContent = () => {
  const { data, isPending, isError } = useReviews();

  if (isError) {
    return <div className={s.reviews__content}>Что-то пошло не так</div>;
  }

  if (isPending) {
    return (
      <div className={s.reviews__content}>
        {emptyArr(12).map((_, i) => (
          <ReviewCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className={s.reviews__content}>
      {data.map((item) => {
        return <ReviewCard key={item.id} review={item} />;
      })}
    </div>
  );
};

export default ReviewContent;
