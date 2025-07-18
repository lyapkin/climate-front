import { backFetch } from "@/src/shared/api";

export const getFiltersApi = async (
  categoryId?: number
): Promise<{
  attrs: {
    id: number;
    name: string;
    unit: string;
    values: { id: number; name: string; slug: string }[];
  }[];
  price: { min: number; max: number };
}> => {
  const res = await backFetch(
    `catalog/filters/${categoryId ? categoryId + "/" : ""}`
  );
  return await res.json();
};
