import { Skeleton } from "@/src/shared/ui/loading";
import s from "./styles.module.css";
import { emptyArr } from "@/src/shared/utils";

const RubricsSkeleton = () => {
  return (
    <ul className={s.categories}>
      {arr.map((_, index) => {
        return (
          <li key={index} style={{ width: 128 }} className={s.categories__item}>
            <Skeleton />
          </li>
        );
      })}
    </ul>
  );
};

const arr = emptyArr(6);

export default RubricsSkeleton;
