import { useQuery } from "@tanstack/react-query";
import { useBlogParams } from "./useBlogParams";
import { getPostsApi } from "../api/getPostsApi";

export const usePostsList = () => {
  const { category, page } = useBlogParams();
  const query = useQuery({
    queryKey: ["posts", category, null],
    queryFn: () => getPostsApi({ category, page }),
  });

  return query;
};
