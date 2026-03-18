import { Page } from "@/src/shared/types";
import { cacheTag } from "next/cache";

export const getPageApi = async (slug: string): Promise<Page> => {
  "use cache";
  cacheTag(`page/${slug}`);

  const url = new URL(
    `pages/static/${slug}/`,
    process.env.NEXT_PUBLIC_API_BASE_URL,
  );
  const res = await fetch(url);
  return await res.json();
};
