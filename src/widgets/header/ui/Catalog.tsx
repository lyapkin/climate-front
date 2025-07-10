import { HTMLAttributes } from "react";
import cn from "classnames";
import s from "./styles.module.css";
import { List } from "@/src/shared/components/list";
import Link from "next/link";
import { getCategoriesApi } from "@/src/entities/category";

const Catalog = async ({ className }: HTMLAttributes<HTMLElement>) => {
  const data = await getCategoriesApi();

  return (
    <List
      data={data}
      render={(item) => (
        <Link href={`/catalog/${item.slug}/`}>{item.name}</Link>
      )}
      className={cn(s.catalog, className)}
      itemClassName={() => s.catalog__item}
    />
  );
};

export default Catalog;
