import { generateMetadataUtil } from "@/src/app/utils";
import { getPostApi } from "@/src/entities/post";
import { Post } from "@/src/page/post";
import { Breadcrumbs, BreadcrumbsItem } from "@/src/widgets/breadcrumbs";
import { Metadata, ResolvingMetadata } from "next";

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getPostApi(slug);

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Блог",
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: post.name,
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}/#`,
      },
    ],
  };

  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem link="/blog/">Блог</BreadcrumbsItem>
        <BreadcrumbsItem>{post.name}</BreadcrumbsItem>
      </Breadcrumbs>

      <Post post={post} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
};

export default PostPage;

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
  const post = await getPostApi(slug);

  return generateMetadataUtil(
    parent,
    `blog/${slug}/`,
    post.metadata,
    searchParamsData
  );
};
