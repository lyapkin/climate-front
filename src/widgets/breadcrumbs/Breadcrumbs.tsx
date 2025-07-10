import Link from "next/link";
import s from "./styles.module.css";
import { PropsWithChildren } from "react";
import HomeIcon from "./HomeIcon";
import cn from "classnames";

const Breadcrumbs = ({ children, home = false }: BreadcrumbsProps) => {
  return (
    <div className={s.breadcrumbsWrapper}>
      <div className="container">
        <ul className={s.breadcrumbs}>
          <li
            className={cn(s.breadcrumbs__item, s.breadcrumbs__itemHome, {
              [s.breadcrumbs__link]: !home,
            })}
          >
            {home ? (
              <HomeIcon />
            ) : (
              <Link href={"/"}>
                <HomeIcon />
              </Link>
            )}
          </li>
          {children}
        </ul>
      </div>
    </div>
  );
};

export interface BreadcrumbsProps extends PropsWithChildren {
  home?: boolean;
}

export default Breadcrumbs;
