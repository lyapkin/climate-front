import { Skeleton } from "@/src/shared/ui/loading";
import s from "./styles.module.css";

const PostCardSkeleton = () => {
  return (
    <div className={s.cardSkeleton}>
      <Skeleton className={s.card__image} />
      <Skeleton className={s.card__title} />
      <Skeleton className={s.card__excerpt} />
      <Skeleton className={s.card__link} />
    </div>
  );
};

export default PostCardSkeleton;
