import { Category, CategoryDetail } from "./model/types";
import { notFound, permanentRedirect } from "next/navigation";
import { cacheTag } from "next/cache";

export const getCategoriesApi = async (): Promise<Category[]> => {
  "use cache";
  cacheTag("categories");

  const url = new URL(
    "catalog/categories/",
    process.env.NEXT_PUBLIC_API_BASE_URL,
  );
  const res = await fetch(url);
  return await res.json();
};

export const getCategoryApi = async (slug: string): Promise<CategoryDetail> => {
  "use cache";
  cacheTag("categories");

  const url = new URL(
    `catalog/categories/${slug}/`,
    process.env.NEXT_PUBLIC_API_BASE_URL,
  );
  const res = await fetch(url);
  if (res.status === 404) {
    notFound();
  }
  if (res.status === 301) {
    permanentRedirect(`/catalog${res.headers.get("Location")}`);
  }
  return await res.json();
};
