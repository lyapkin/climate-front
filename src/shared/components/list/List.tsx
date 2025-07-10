import s from "./styles.module.css";
import cn from "classnames";
import { HTMLAttributes, ReactElement } from "react";

const List = <T extends object & { ["id"]: number | string }>({
  data,
  render,
  className,
  itemClassName,
}: ListProps<T>) => {
  return (
    <ul className={cn(s.list, className)}>
      {data.map((item, i) => {
        return (
          <li
            key={"id" in item ? item.id : i}
            className={cn(
              s.list__item,
              typeof itemClassName === "string"
                ? itemClassName
                : typeof itemClassName === "function"
                ? itemClassName(i)
                : ""
            )}
          >
            {render(item, i)}
          </li>
        );
      })}
    </ul>
  );
};

interface ListProps<T extends object & { ["id"]: number | string }>
  extends HTMLAttributes<HTMLUListElement> {
  data: T[];
  render: (item: T, i: number) => ReactElement;
  itemClassName?: ((i: number) => string) | string;
}

export default List;
