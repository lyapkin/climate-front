import { PageContent } from "./types";
import { cacheTag } from "next/cache";

export const getPolicyApi = async (slug: string): Promise<PageContent> => {
  "use cache";
  cacheTag("policy");

  const url = new URL(
    `company/policy/${slug}/`,
    process.env.NEXT_PUBLIC_API_BASE_URL,
  );

  const res = await fetch(url);

  return await res.json();
};
