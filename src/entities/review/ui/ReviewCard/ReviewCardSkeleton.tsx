import { Skeleton } from "@/src/shared/ui/loading";
import s from "./styles.module.css";

const ReviewCardSkeleton = () => {
  return (
    <article className={s.card_skeleton}>
      <Skeleton />
    </article>
  );
};

export default ReviewCardSkeleton;
