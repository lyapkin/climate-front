import { getPageApi } from "@/src/shared/api";
import { generateMetadataUtil } from "@/src/app/utils";
import { Breadcrumbs, BreadcrumbsItem } from "@/src/widgets/breadcrumbs";
import { Metadata, ResolvingMetadata } from "next";
import { Faq } from "@/src/page/faq";

const FaqPage = async () => {
  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "FAQ",
        item: `${process.env.SITE_URL}/faq/`,
      },
    ],
  };
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>FAQ</BreadcrumbsItem>
      </Breadcrumbs>
      <Faq />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
};

export default FaqPage;

export const generateMetadata = async (
  {
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const searchParamsData = await searchParams;
  const page = await getPageApi("faq");

  return generateMetadataUtil(parent, "faq/", page.metadata, searchParamsData);
};
