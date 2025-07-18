import { getPageApi } from "@/src/shared/api";
import { generateMetadataUtil } from "@/src/app/utils";
import { Breadcrumbs, BreadcrumbsItem } from "@/src/widgets/breadcrumbs";
import { Metadata, ResolvingMetadata } from "next";
import { Reviews } from "@/src/page/review";

const ReviewsPage = async () => {
  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Отзывы",
        item: `${process.env.SITE_URL}/reviews/`,
      },
    ],
  };
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Отзывы</BreadcrumbsItem>
      </Breadcrumbs>
      <Reviews />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
};

export default ReviewsPage;

export const generateMetadata = async (
  {
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const searchParamsData = await searchParams;
  const page = await getPageApi("reviews");

  return generateMetadataUtil(
    parent,
    "reviews/",
    page.metadata,
    searchParamsData
  );
};
