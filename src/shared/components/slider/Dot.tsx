import { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import s from "./styles.module.css";

const Dot = ({ active, className, ...rest }: DotProps) => {
  return (
    <button
      className={cn(s.dots__item, className, { [s.dots__item_active]: active })}
      {...rest}
    ></button>
  );
};

interface DotProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  index: number;
  active?: boolean;
}

export default Dot;
