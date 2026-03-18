import { BlogRubric } from "../model";
import { cacheTag } from "next/cache";

export const getBlogRubricsApi = async (): Promise<BlogRubric[]> => {
  "use cache";
  cacheTag("blog");

  const url = new URL(
    "blog/post-rubrics/",
    process.env.NEXT_PUBLIC_API_BASE_URL,
  );
  const res = await fetch(url);
  return await res.json();
};
