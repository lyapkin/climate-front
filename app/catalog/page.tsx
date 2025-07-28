import { generateMetadataUtil } from "@/src/app/utils";
import { Catalog } from "@/src/page/catalog";
import { getPageApi } from "@/src/shared/api";
import { Breadcrumbs, BreadcrumbsItem } from "@/src/widgets/breadcrumbs";
import { Metadata, ResolvingMetadata } from "next";

const CatalogPage = () => {
  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Каталог",
        item: `${process.env.SITE_URL}/catalog/`,
      },
    ],
  };
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Каталог</BreadcrumbsItem>
      </Breadcrumbs>
      <Catalog />
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
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const searchParamsData = await searchParams;
  const page = await getPageApi("catalog");

  return generateMetadataUtil(
    parent,
    "catalog/",
    page.metadata,
    searchParamsData
  );
};
