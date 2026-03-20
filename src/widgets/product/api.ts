import { ProductPreview } from "@/src/entities/product/model";
import { Paginated } from "@/src/features/pagination";

export const getProductsApi = async (
  params: URLSearchParams,
): Promise<Paginated<ProductPreview>> => {
  const searchParams = params.toString();

  const url = new URL(
    searchParams ? `catalog/products/?${searchParams}` : "catalog/products/",
    process.env.NEXT_PUBLIC_API_BASE_URL,
  );
  const res = await fetch(url);
  return res.json();
};
