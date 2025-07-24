import { PostCardSkeleton } from "@/src/entities/post";
import { emptyArr } from "@/src/shared/utils";

const BlogSkeleton = () => {
  return (
    <>
      {arr.map((_, index) => {
        return <PostCardSkeleton key={index} />;
      })}
    </>
  );
};

const arr = emptyArr(12);

export default BlogSkeleton;
