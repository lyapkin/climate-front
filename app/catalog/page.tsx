import { Catalog } from "@/src/page/catalog";
import { Breadcrumbs, BreadcrumbsItem } from "@/src/widgets";

const CatalogPage = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Каталог</BreadcrumbsItem>
      </Breadcrumbs>
      <Catalog />
    </>
  );
};

export default CatalogPage;
