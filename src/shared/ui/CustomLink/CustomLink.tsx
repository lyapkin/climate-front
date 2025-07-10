import Link, { LinkProps } from "next/link";
import { HTMLAttributes } from "react";
import s from "./styles.module.css";
import cn from "classnames";

const CustomLink = ({
  children,
  className,
  variant = "primary",
  ...rest
}: CustomLinkProps) => {
  return (
    <Link className={cn(s.link, className, s[`link__${variant}`])} {...rest}>
      {children}
    </Link>
  );
};

interface CustomLinkProps extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" /* | "secondary"*/;
}

export default CustomLink;
