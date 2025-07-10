import { useQuery } from "@tanstack/react-query";
import { getPromosApi } from "./getPromosApi";

export const usePromos = () => {
  const obj = useQuery({
    queryKey: ["promos"],
    queryFn: () => {
      return getPromosApi();
    },
  });
  return obj;
};
