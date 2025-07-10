import { Contact, Rating } from "@/src/widgets";
import s from "./styles.module.css";
import cn from "classnames";
import { ReviewContent } from "@/src/widgets/review/ui";
import { getPageApi } from "@/src/shared/api";

const Reviews = async () => {
  const data = await getPageApi("reviews");
  return (
    <>
      <div className="page hero">
        <div className="container">
          <main className={s.reviews}>
            <h1 className={cn(s.reviews__title, "page-title")}>{data.title}</h1>
            <Rating className={s.reviews__rating} />
            <ReviewContent className={s.reviews__content} />
          </main>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Reviews;
