import { ButtonHTMLAttributes, JSX } from "react";
import s from "./styles.module.css";
import cn from "classnames";

const Button = ({
  children,
  className,
  variant = "primary",
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(s.button, className, s[`button__${variant}`])}
      {...rest}
    >
      {children}
      {icon && <span className={s.icon}>{icon}</span>}
    </button>
  );
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  icon?: JSX.Element;
}

export default Button;
