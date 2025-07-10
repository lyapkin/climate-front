import { getPageApi } from "@/src/shared/api";
import s from "./styles.module.css";
import cn from "classnames";
import { Category } from "@/src/entities/category";

const CatalogTitle = async ({ category }: CatalogTitleProps) => {
  if (category) {
    return (
      <h1 className={cn(s.catalog__title, "page-title")}>{category.name}</h1>
    );
  }

  const page = await getPageApi("catalog");

  return <h1 className={cn(s.catalog__title, "page-title")}>{page.title}</h1>;
};

interface CatalogTitleProps {
  category?: Category;
}

export default CatalogTitle;
