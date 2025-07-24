import { useQuery } from "@tanstack/react-query";
import { getReviewApi } from "../api";

export const useReviews = () => {
  const query = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getReviewApi(),
  });

  return query;
};
