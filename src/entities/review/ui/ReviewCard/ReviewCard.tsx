import Image from "next/image";
import { Stars } from "../Stars";
import s from "./styles.module.css";
import { Review } from "@/src/entities/review";

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <article className={s.card}>
      <time dateTime={review.date} className={s.card__date}>
        {new Intl.DateTimeFormat("ru-RU", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(review.date))}
      </time>
      <Stars rate={review.rate} className={s.card__rating} />
      <div className={s.card__img}>
        <Image
          src={review.img}
          alt={"Аватар клиента"}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className={s.card__text}>{review.text}</p>
      <p className={s.card__name}>{review.name}</p>
    </article>
  );
};

interface ReviewCardProps {
  review: Review;
}

export default ReviewCard;
