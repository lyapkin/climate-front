import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { getProductsApi } from "../api";
import useQueryKey from "./useQueryKey";

export const useGetProducts = () => {
  const params = useParams<{ category?: string }>();
  const queryKey = useQueryKey();
  const searchParams = useSearchParams();

  const obj = useQuery({
    queryKey: ["products", params, queryKey],
    queryFn: () => {
      const urlSearchParams = new URLSearchParams(searchParams);
      if (params.category) {
        urlSearchParams.set("category", params.category);
      }
      return getProductsApi(urlSearchParams);
    },
  });

  return obj;
};
