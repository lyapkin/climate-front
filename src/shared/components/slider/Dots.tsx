"use client";
import s from "./styles.module.css";
import cn from "classnames";

const Dots = ({ amount, current, onClick }: DotsProps) => {
  const dots = Array(amount)
    .fill(null)
    .map((_, i) => {
      return (
        <button
          key={i}
          className={cn(s.dots__item, { [s.dots__item_active]: current === i })}
          onClick={() => onClick(i)}
        ></button>
      );
    });
  return <div className={s.dots}>{dots}</div>;
};

interface DotsProps {
  amount: number;
  current: number;
  onClick: (i: number) => void;
}

export default Dots;
