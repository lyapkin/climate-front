import { HTMLAttributes } from "react";
import s from "./styles.module.css";
import cn from "classnames";
import Link from "next/link";

const Stars = ({ rate, className }: StarsProps) => {
  const round = Math.floor(rate);
  const stars = arr.map((_, i) => {
    const width =
      i + 1 <= round
        ? "100%"
        : i + 1 - round > 1
          ? "0%"
          : `${(rate - i) * 100}%`;
    return (
      <span
        key={i}
        style={
          {
            "--after-width": width,
          } as React.CSSProperties
        }
      ></span>
    );
  });
  return (
    <Link
      href={
        "https://www.avito.ru/brands/4a3f3e00703d4cb99a7d3b8249f1b0b3/all/predlozheniya_uslug?sellerId=4abe76a4404b33dc9e3b98d67b5bc1a1"
      }
      target="_blank"
      className={cn(s.stars, className)}
    >
      {stars}
    </Link>
  );
};

interface StarsProps extends HTMLAttributes<HTMLElement> {
  rate: number;
}

const arr = Array(5).fill(0);

export default Stars;
