import s from "./styles.module.css";
import cn from "classnames";
import { Rating } from "@/src/widgets/review";
import ReviewContent from "./ReviewContent";
import { getPageApi } from "@/src/shared/api";
import { Contact } from "@/src/widgets/consultation";

const Reviews = async () => {
  const data = await getPageApi("reviews");
  return (
    <>
      <div className="page hero">
        <div className="container">
          <main className={s.reviews}>
            <h1 className={cn(s.reviews__title, "page-title")}>{data.title}</h1>
            <Rating className={s.reviews__rating} />
            <ReviewContent />
          </main>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Reviews;
