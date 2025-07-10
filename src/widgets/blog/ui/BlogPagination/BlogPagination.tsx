"use client";
import { Pagination } from "@/src/features/pagination";
import { usePostsList } from "../../utils";
import { HTMLAttributes } from "react";

const BlogPagination = ({ className }: HTMLAttributes<HTMLElement>) => {
  const { data, isError, isPending } = usePostsList();

  if (isError) {
    return null;
  }

  return (
    <Pagination
      pages={data?.pages}
      disabled={isPending}
      className={className}
    />
  );
};

export default BlogPagination;
