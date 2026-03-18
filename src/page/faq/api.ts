import { Rubric } from "@/src/features/rubric/model";
import { Faq } from "./types";
import { cacheTag } from "next/cache";

export const getFAQCategoriesApi = async (): Promise<Rubric[]> => {
  "use cache";
  cacheTag("faq");

  const url = new URL(
    "blog/faq-rubrics/",
    process.env.NEXT_PUBLIC_API_BASE_URL,
  );
  const res = await fetch(url);
  return await res.json();
};

export const getFAQsApi = async (): Promise<Faq[]> => {
  "use cache";
  cacheTag("faq");

  const url = new URL("blog/faqs/", process.env.NEXT_PUBLIC_API_BASE_URL);
  const res = await fetch(url);
  return await res.json();
};
