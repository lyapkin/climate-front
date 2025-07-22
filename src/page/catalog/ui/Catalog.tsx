import { Suspense } from "react";
import CatalogTitle from "./CatalogTitle";
import Filters from "./Filters";
import ProductList from "./ProductList";
import s from "./styles.module.css";
import { CategoryDetail } from "@/src/entities/category";
import FiltersWrapper from "./filters/FiltersWrapper";

const Catalog = ({ category }: CatalogProps) => {
  return (
    <>
      <CatalogTitle category={category} />
      <div className={s.catalog__list}>
        <Suspense>
          <ProductList />
        </Suspense>
      </div>
      <FiltersWrapper className={s.catalog__filters}>
        <Filters category={category} />
      </FiltersWrapper>
      {/* <MobileCategories
              className={s.catalog__mobileCategories}
              groups={categoryGroups}
              groupSlug={groupSlug}
              categorySlug={categorySlug}
            /> */}
    </>
  );
};

interface CatalogProps {
  category?: CategoryDetail;
}

export default Catalog;
