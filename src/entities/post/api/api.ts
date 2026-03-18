import { cacheTag } from "next/cache";
import { BlogCategory, PostContent } from "../model";
import { notFound } from "next/navigation";

export const getBlogCategoriesApi = async (): Promise<BlogCategory[]> => {
  "use cache";
  cacheTag("blog");

  const url = new URL(
    "blog/post-categories/",
    process.env.NEXT_PUBLIC_API_BASE_URL,
  );
  const res = await fetch(url);
  return await res.json();
};

export const getPostApi = async (slug: string): Promise<PostContent> => {
  "use cache";
  cacheTag("blog");

  const url = new URL(
    `blog/posts/${slug}/`,
    process.env.NEXT_PUBLIC_API_BASE_URL,
  );
  const res = await fetch(url);
  if (res.status === 404) {
    notFound();
  }
  return await res.json();
};
