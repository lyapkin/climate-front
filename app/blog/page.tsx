import { getPageApi } from "@/src/shared/api";
import { generateMetadataUtil } from "@/src/app/utils";
import { Metadata, ResolvingMetadata } from "next";
import { Blog } from "@/src/page/blog";
import { Breadcrumbs, BreadcrumbsItem } from "@/src/widgets/breadcrumbs";

const BlogPage = async () => {
  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Блог",
        item: `${process.env.SITE_URL}/blog/`,
      },
    ],
  };
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Блог</BreadcrumbsItem>
      </Breadcrumbs>
      <Blog />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
};

export default BlogPage;

export const generateMetadata = async (
  {
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const searchParamsData = await searchParams;
  const page = await getPageApi("blog");

  return generateMetadataUtil(parent, "blog/", page.metadata, searchParamsData);
};
