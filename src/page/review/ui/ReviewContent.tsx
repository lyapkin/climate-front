import { Review, ReviewCard } from "@/src/entities/review";
import s from "./styles.module.css";

const ReviewContent = ({ reviews }: Props) => {
  return (
    <div className={s.reviews__content}>
      {reviews.map((item) => {
        return <ReviewCard key={item.id} review={item} />;
      })}
    </div>
  );
};

interface Props {
  reviews: Review[];
}

export default ReviewContent;
