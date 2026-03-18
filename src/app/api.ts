import { Sitemap } from "./types";

export const getSitemapApi = async (): Promise<Sitemap> => {
  const url = new URL(
    "metadata/sitemap/_/",
    process.env.NEXT_PUBLIC_API_BASE_URL,
  );

  const res = await fetch(url);

  return res.json();
};
