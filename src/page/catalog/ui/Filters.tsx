import { CategoryDetail } from "@/src/entities/category";
import { getCategoriesApi } from "@/src/entities/category/api";
import { FilterLink, FilterParams } from "@/src/widgets";
import { Clear, FilterRange } from "@/src/widgets/filters";
import { Suspense } from "react";

const Filters = async ({ category }: FiltersProps) => {
  const categories = await getCategoriesApi();

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
          minRange={1}
          maxRange={500}
        />
      </Suspense>
      <Clear />
    </>
  );
};

interface FiltersProps {
  category?: CategoryDetail;
}

export default Filters;
