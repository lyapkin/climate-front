import { ButtonHTMLAttributes } from "react";
import s from "./styles.module.css";
import cn from "classnames";

const SlideButton = ({ orintation, className }: SlideButtonProps) => {
  return (
    <button
      className={cn(
        s.slide__button,
        className,
        s[`slide__button_${orintation}`]
      )}
    >
      <svg
        width="10"
        height="18"
        viewBox="0 0 10 18"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.16634 17.3333L0.833007 8.99998L9.16634 0.666646L9.16634 17.3333Z" />
      </svg>
    </button>
  );
};

interface SlideButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  orintation: "left" | "right";
}

export default SlideButton;
