import { ProductBase, ProductCartResponse } from "@/src/entities/product/model";

export const getCartProductsApi = async (
  ids: ProductBase["id"][],
): Promise<ProductCartResponse[]> => {
  if (ids.length == 0) return [];

  const url = new URL("catalog/cart/", process.env.NEXT_PUBLIC_API_BASE_URL);

  url.searchParams.set("id", ids.join(","));

  const res = await fetch(url);

  return await res.json();
};
