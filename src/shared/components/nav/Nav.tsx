import cn from "classnames";
import s from "./styles.module.css";
import { HTMLAttributes } from "react";

const Nav = ({ children, className }: HTMLAttributes<HTMLUListElement>) => {
  return (
    <nav className={cn(s.nav, className)}>
      <ul className={s.nav__list}>{children}</ul>
    </nav>
  );
};

export default Nav;
