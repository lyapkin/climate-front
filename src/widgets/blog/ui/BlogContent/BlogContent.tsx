"use client";
import { HTMLAttributes } from "react";
import { usePostsList } from "../../utils";
import BlogSkeleton from "./BlogSkeleton";
import { PostCard } from "@/src/entities/post";

const BlogContent = ({ className }: HTMLAttributes<HTMLElement>) => {
  const { data, isPending, isError } = usePostsList();

  if (isError) {
    return <div className={className}>Что-то пошло не так</div>;
  }

  if (isPending) {
    return (
      <div className={className}>
        <BlogSkeleton />
      </div>
    );
  }

  return (
    <div className={className}>
      {data.results.map((item) => {
        return <PostCard key={item.id} post={item} />;
      })}
    </div>
  );
};

export default BlogContent;
