import { cacheTag } from "next/cache";

export const getFiltersApi = async (
  categoryId?: number,
): Promise<{
  attrs: {
    id: number;
    name: string;
    unit: string;
    values: { id: number; name: string; slug: string }[];
  }[];
  price: { min: number; max: number };
}> => {
  "use cache";
  cacheTag("catalog");

  const url = new URL(
    `catalog/filters/${categoryId ? categoryId + "/" : ""}`,
    process.env.NEXT_PUBLIC_API_BASE_URL,
  );
  const res = await fetch(url);
  return await res.json();
};
