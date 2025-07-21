import { CategoryDetail } from "@/src/entities/category";
import { getCategoriesApi } from "@/src/entities/category/api";
import { Suspense } from "react";
import { getFiltersApi } from "../api";
import s from "./styles.module.css";
import FilterLink from "./filters/FilterLink";
import FilterParams from "./filters/FilterParams";
import { FilterRange } from "./filters/FilterRange";
import Clear from "./filters/Clear";

const Filters = async ({ category }: FiltersProps) => {
  const categories = await getCategoriesApi();
  const filters = await getFiltersApi(category?.id);

  return (
    <>
      <FilterLink
        title="Категории"
        data={categories}
        prefix="/catalog/"
        current={
          category &&
          (category.parents.length > 0
            ? category.parents[0].slug
            : category.slug)
        }
      />
      {category && category.children.length > 0 && (
        <FilterLink
          title="Подгатегории"
          data={category.children}
          prefix="/catalog/"
        />
      )}
      {filters.attrs.map((item) => {
        return (
          <Suspense key={item.id}>
            <FilterParams
              title={item.name}
              data={item.values}
              type={"attrs"}
              multiple
            />
          </Suspense>
        );
      })}
      <Suspense>
        <FilterParams
          title="Наличие"
          data={[
            { id: 1, name: "В наличии", slug: "true" },
            { id: 2, name: "Под заказ", slug: "false" },
          ]}
          type="stock"
        />
      </Suspense>
      <Suspense>
        <FilterRange
          title="Стоимость"
          type="price"
          minRange={filters.price.min || 1}
          maxRange={filters.price.max || 1000}
          disabled={filters.price.min === null || filters.price.max === null}
        />
      </Suspense>
      <Clear className={s.filters__clear} />
    </>
  );
};

interface FiltersProps {
  category?: CategoryDetail;
}

export default Filters;
