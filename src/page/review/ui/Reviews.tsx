import s from "./styles.module.css";
import cn from "classnames";
import { Rating } from "@/src/widgets/review";
import ReviewContent from "./ReviewContent";
import { getPageApi } from "@/src/shared/api";
import { Contact } from "@/src/widgets/consultation";
import { getReviewApi } from "@/src/entities/review/api";
import { CustomLink } from "@/src/shared/ui";

const Reviews = async () => {
  const [data, reviews] = await Promise.all([
    getPageApi("reviews"),
    getReviewApi(),
  ]);
  return (
    <>
      <div className="page hero">
        <div className="container">
          <main className={s.reviews}>
            <h1 className={cn(s.reviews__title, "page-title")}>{data.title}</h1>
            <Rating className={s.reviews__rating} />
            <ReviewContent reviews={reviews} />
            <CustomLink
              href={
                "https://www.avito.ru/brands/4a3f3e00703d4cb99a7d3b8249f1b0b3/all/predlozheniya_uslug?sellerId=4abe76a4404b33dc9e3b98d67b5bc1a1"
              }
              target="_blank"
              className={s.reviews__link}
            >
              Больше отзывов на авито
            </CustomLink>
          </main>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Reviews;
