import { backFetch } from "@/src/shared/api";
import { PageContent } from "./types";

export const getPolicyApi = async (slug: string): Promise<PageContent> => {
  const response = await backFetch(`company/policy/${slug}/`);

  return await response.json();
};
