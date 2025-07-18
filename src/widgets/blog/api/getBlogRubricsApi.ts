import { backFetch } from "@/src/shared/api";
import { BlogRubric } from "../model";

export const getBlogRubricsApi = async (): Promise<BlogRubric[]> => {
  const res = await backFetch("blog/post-rubrics/");
  return await res.json();
  return [
    {
      id: 1,
      name: "Наши работы",
    },
    {
      id: 2,
      name: "Наши работы",
    },
    {
      id: 3,
      name: "Наши работы",
    },
    {
      id: 4,
      name: "Наши работы",
    },
    {
      id: 5,
      name: "Наши работы",
    },
    {
      id: 6,
      name: "Наши работы",
    },
  ];
};
