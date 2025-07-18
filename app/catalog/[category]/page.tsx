import { getCategoryApi } from "@/src/entities/category/api";
import { Catalog } from "@/src/page/catalog";
import { Breadcrumbs, BreadcrumbsItem } from "@/src/widgets/breadcrumbs";

const CatalogPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  const cat = await getCategoryApi(category);
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem link="/catalog/">Каталог</BreadcrumbsItem>
        {cat.parents.map((item) => {
          return (
            <BreadcrumbsItem key={item.id} link={`/catalog/${item.slug}/`}>
              {item.name}
            </BreadcrumbsItem>
          );
        })}
        <BreadcrumbsItem>{cat.name}</BreadcrumbsItem>
      </Breadcrumbs>
      <Catalog category={cat} />
    </>
  );
};

export default CatalogPage;
