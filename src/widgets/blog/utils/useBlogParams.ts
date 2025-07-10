import { useRubrics } from "@/src/features/rubric";
import { isNumber } from "@/src/shared/utils";
import { useSearchParams } from "next/navigation";

export const useBlogParams = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const { currentRubric: category } = useRubrics();

  return { category, page: isNumber(page) ? Number(page) : null };
};
