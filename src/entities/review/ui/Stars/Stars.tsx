import { HTMLAttributes } from "react";
import s from "./styles.module.css";
import cn from "classnames";

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
  return <span className={cn(s.stars, className)}>{stars}</span>;
};

interface StarsProps extends HTMLAttributes<HTMLElement> {
  rate: number;
}

const arr = Array(5).fill(0);

export default Stars;
