import { cacheTag } from "next/cache";
import { ProductDetail } from "../model";
import { notFound, permanentRedirect } from "next/navigation";

export const getProductDetailApi = async (
  slug: string,
): Promise<ProductDetail> => {
  "use cache";
  cacheTag("products");

  const url = new URL(
    `catalog/products/${slug}/`,
    process.env.NEXT_PUBLIC_API_BASE_URL,
  );
  const res = await fetch(url, { redirect: "manual" });
  if (res.status === 404) {
    notFound();
  }
  if (res.status === 301) {
    permanentRedirect(`/product${res.headers.get("Location")}`);
  }
  return res.json();
};
