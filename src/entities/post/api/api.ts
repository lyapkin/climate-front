import { backFetch } from "@/src/shared/api";
import { BlogCategory, PostContent } from "../model";
import { notFound } from "next/navigation";

export const getBlogCategoriesApi = async (): Promise<BlogCategory[]> => {
  const res = await backFetch("blog/post-categories/");
  return await res.json();
};

export const getPostApi = async (slug: string): Promise<PostContent> => {
  const res = await backFetch(`blog/posts/${slug}/`);
  if (res.status === 404) {
    notFound();
  }
  return await res.json();
};
