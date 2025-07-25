"use client";
import { ButtonHTMLAttributes, JSX } from "react";
import s from "./styles.module.css";
import cn from "classnames";
import { useIsInteractive } from "../../utils/client";

const Button = ({
  children,
  className,
  variant = "primary",
  icon,
  disabled,
  ...rest
}: ButtonProps) => {
  const isInteractive = useIsInteractive();
  return (
    <button
      className={cn(s.button, className, s[`button__${variant}`])}
      disabled={!isInteractive || disabled}
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
