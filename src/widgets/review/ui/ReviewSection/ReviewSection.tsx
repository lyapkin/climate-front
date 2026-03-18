import { CustomLink } from "@/src/shared/ui/CustomLink";
import ReviewContent from "./ReviewContent";
import s from "./styles.module.css";
import cn from "classnames";
import { Rating } from "../Rating";
import { getReviewApi } from "@/src/entities/review/api";
import { revalidateTag } from "next/cache";

const ReviewSection = async () => {
  const reviews = await getReviewApi();

  if (reviews.length === 0) {
    revalidateTag("reviews", { expire: 0 });
    return null;
  }

  return (
    <section className={cn(s.reviewSection, "section")}>
      <div className="container">
        <div className={s.review}>
          <h2 className={cn(s.review__title, "section-title")}>
            Оцените отзывы о нашей компании на авито
          </h2>
          <Rating className={s.review__rating} />
          <ReviewContent reviews={reviews.slice(0, 12)} />
          <CustomLink href={"/reviews/"} className={s.review__link}>
            Все отзывы
          </CustomLink>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
