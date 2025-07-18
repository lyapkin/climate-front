import { getPageApi } from "@/src/shared/api";
import { generateMetadataUtil } from "@/src/app/utils";
import { Breadcrumbs, BreadcrumbsItem } from "@/src/widgets/breadcrumbs";
import { Metadata, ResolvingMetadata } from "next";
import { Services } from "@/src/page/services";

const ServicesPage = async () => {
  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Услуги",
        item: `${process.env.SITE_URL}/services/`,
      },
    ],
  };
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Услуги</BreadcrumbsItem>
      </Breadcrumbs>
      <Services />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
};

export default ServicesPage;

export const generateMetadata = async (
  {
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const searchParamsData = await searchParams;
  const page = await getPageApi("services");

  return generateMetadataUtil(
    parent,
    "services/",
    page.metadata,
    searchParamsData
  );
};
