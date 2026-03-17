import React, { HTMLAttributes } from "react";
import s from "./styles.module.css";
import cn from "classnames";
import { Stars } from "@/src/entities/review";
import Link from "next/link";

const Rating = ({ className }: HTMLAttributes<HTMLElement>) => {
  const rate = 5.0;

  return (
    <Link
      href={
        "https://www.avito.ru/brands/4a3f3e00703d4cb99a7d3b8249f1b0b3/all/predlozheniya_uslug?sellerId=4abe76a4404b33dc9e3b98d67b5bc1a1"
      }
      target="_blank"
      className={cn(s.rating, className)}
    >
      <Stars rate={rate} className={s.rating__stars} />
      <span className={s.rating__num}>{rate.toFixed(1)}</span>
      <span className={s.rating__title}>Наш рейтинг на Авито</span>
    </Link>
  );
};

export default Rating;
