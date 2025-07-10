import { PropsWithChildren, Suspense } from "react";
import s from "./styles.module.css";
import CatalogPagination from "./CatalogPagination";
import { SearchBar } from "@/src/features/search";
import { Sort } from "@/src/features/sort";

const CatalogLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="page hero">
      <div className="container">
        <main>
          <div className={s.catalog}>
            {children}
            <Suspense>
              <SearchBar
                className={s.catalog__search}
                pathPrefix={"/catalog/"}
              />
            </Suspense>
            <Suspense>
              <Sort className={s.catalog__sort} />
            </Suspense>
            <div className={s.catalog__pagination}>
              <Suspense>
                <CatalogPagination />
              </Suspense>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CatalogLayout;
