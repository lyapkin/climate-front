import Link, { LinkProps } from "next/link";
import { HTMLAttributes } from "react";
import s from "./styles.module.css";
import cn from "classnames";

const CustomLink = ({
  children,
  className,
  target,
  variant = "primary",
  ...rest
}: CustomLinkProps) => {
  return (
    <Link
      className={cn(s.link, className, s[`link__${variant}`])}
      target={target ? target : ""}
      {...rest}
    >
      {children}
    </Link>
  );
};

interface CustomLinkProps extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" /* | "secondary"*/;
  target?: "_blank";
}

export default CustomLink;
