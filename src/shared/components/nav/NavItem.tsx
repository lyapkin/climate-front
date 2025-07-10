import Link from "next/link";
import s from "./styles.module.css";
import cn from "classnames";
import { LiHTMLAttributes } from "react";

const NavItem = ({ link, className, children }: NavItemProps) => {
  return (
    <li className={cn(s.nav__item, className)}>
      <Link href={link}>{children}</Link>
    </li>
  );
};

interface NavItemProps extends LiHTMLAttributes<HTMLLIElement> {
  link: string;
}

export default NavItem;
