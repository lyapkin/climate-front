import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { getProductsApi } from "../api";
import useQueryKey from "./useQueryKey";

export const useGetProducts = () => {
  const params = useParams<{ slug?: string }>();
  const queryKey = useQueryKey();
  const searchParams = useSearchParams();

  const obj = useQuery({
    queryKey: ["products", params, queryKey],
    queryFn: () => {
      const urlSearchParams = new URLSearchParams(searchParams);
      if (params.slug) {
        urlSearchParams.set("category", params.slug);
      }
      return getProductsApi(urlSearchParams);
    },
  });

  return obj;
};
