import { HTMLAttributes } from "react";
import { getReviewApi } from "@/src/entities/review";
import { PreviewCard } from "../PreviewCard";

const ReviewContent = async ({ className }: HTMLAttributes<HTMLElement>) => {
  const reviews = await getReviewApi();
  return (
    <div className={className}>
      {reviews.map((item) => {
        return <PreviewCard key={item.id} review={item} />;
      })}
    </div>
  );
};

export default ReviewContent;
