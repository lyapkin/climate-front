import { useQuery } from "@tanstack/react-query";
import { getPostsApi } from "../api";
import { useBlogParams } from "./useBlogParams";

export const usePostsList = () => {
  const { category, page } = useBlogParams();
  const query = useQuery({
    queryKey: ["posts", category, null],
    queryFn: () => getPostsApi({ category, page }),
  });

  return query;
};
