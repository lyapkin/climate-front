import { generateMetadataUtil } from "@/src/app/utils";
import { getCategoryApi } from "@/src/entities/category/api";
import { Catalog } from "@/src/page/catalog";
import { Breadcrumbs, BreadcrumbsItem } from "@/src/widgets/breadcrumbs";
import { Metadata, ResolvingMetadata } from "next";

const CatalogPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const cat = await getCategoryApi(slug);

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Каталог",
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/catalog/`,
      },
      ...cat.parents.map((item, i) => {
        return {
          "@type": "ListItem",
          position: i + 2,
          name: item.name,
          item: `${process.env.NEXT_PUBLIC_SITE_URL}/catalog/${item.slug}/#`,
        };
      }),
      {
        "@type": "ListItem",
        position: cat.parents.length + 2,
        name: cat.name,
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/catalog/${slug}/#`,
      },
    ],
  };

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
};

export default CatalogPage;

export const generateMetadata = async (
  {
    params,
    searchParams,
  }: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { slug } = await params;
  const searchParamsData = await searchParams;
  const page = await getCategoryApi(slug);

  return generateMetadataUtil(
    parent,
    `catalog/${slug}/`,
    page.metadata,
    searchParamsData
  );
};
