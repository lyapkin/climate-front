import { ButtonHTMLAttributes } from "react";
import s from "./styles.module.css";
import cn from "classnames";

const ArrowButton = ({ className, direction, ...rest }: ArrowButtonProps) => {
  return (
    <button
      className={cn(s.button, s[`button__${direction}`], className)}
      {...rest}
    >
      <svg
        viewBox="0 0 23 12"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.403263 6.53033C0.110371 6.23744 0.110371 5.76257 0.403263 5.46967L5.17623 0.696701C5.46913 0.403807 5.944 0.403807 6.23689 0.696701C6.52979 0.989594 6.52979 1.46447 6.23689 1.75736L1.99425 6L6.23689 10.2426C6.52979 10.5355 6.52979 11.0104 6.2369 11.3033C5.944 11.5962 5.46913 11.5962 5.17624 11.3033L0.403263 6.53033ZM22.9336 6L22.9336 6.75L0.933594 6.75L0.933594 6L0.933594 5.25L22.9336 5.25L22.9336 6Z" />
      </svg>
    </button>
  );
};

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "left" | "right";
}

export default ArrowButton;
