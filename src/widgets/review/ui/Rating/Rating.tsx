import React, { HTMLAttributes } from "react";
import s from "./styles.module.css";
import cn from "classnames";
import { Stars } from "../Stars";

const Rating = ({ className }: HTMLAttributes<HTMLElement>) => {
  const rate = 5.0;

  return (
    <div className={cn(s.rating, className)}>
      <Stars rate={rate} className={s.rating__stars} />
      <div className={s.rating__num}>{rate.toFixed(1)}</div>
      <p className={s.rating__title}>Наш рейтинг на Авито</p>
    </div>
  );
};

export default Rating;
