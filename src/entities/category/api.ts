import { backFetch } from "@/src/shared/api";
import { Category, CategoryDetail } from "./model/types";
import { notFound, permanentRedirect } from "next/navigation";

export const getCategoriesApi = async (): Promise<Category[]> => {
  const res = await backFetch("catalog/categories/");
  return await res.json();
  // return [
  //   {
  //     id: 1,
  //     name: "Кассетные кондиционеры",
  //     slug: "cat1",
  //     img: "/images/categories/1.png",
  //     children: [
  //       {
  //         id: 1,
  //         name: "Кассетные кондиционеры",
  //         slug: "sub1",
  //       },
  //       {
  //         id: 2,
  //         name: "Кассетные кондиционеры",
  //         slug: "sub2",
  //       },
  //       {
  //         id: 3,
  //         name: "Кассетные кондиционеры",
  //         slug: "sub3",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Мобильные кондиционеры",
  //     slug: "cat2",
  //     img: "/images/categories/1.png",
  //     children: [
  //       {
  //         id: 1,
  //         name: "Кассетные кондиционеры",
  //         slug: "sub4",
  //       },
  //       {
  //         id: 2,
  //         name: "Кассетные кондиционеры",
  //         slug: "sub5",
  //       },
  //       {
  //         id: 3,
  //         name: "Кассетные кондиционеры",
  //         slug: "sub6",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "Мульти-сплит-системы",
  //     slug: "cat3",
  //     img: "/images/categories/1.png",
  //     children: [
  //       {
  //         id: 1,
  //         name: "Кассетные кондиционеры",
  //         slug: "sub7",
  //       },
  //       {
  //         id: 2,
  //         name: "Кассетные кондиционеры",
  //         slug: "sub8",
  //       },
  //       {
  //         id: 3,
  //         name: "Кассетные кондиционеры",
  //         slug: "sub9",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "Настенные кондиционеры",
  //     slug: "cat4",
  //     img: "/images/categories/1.png",
  //     children: [
  //       {
  //         id: 1,
  //         name: "Кассетные кондиционеры",
  //         slug: "sub10",
  //       },
  //       {
  //         id: 2,
  //         name: "Кассетные кондиционеры",
  //         slug: "sub11",
  //       },
  //       {
  //         id: 3,
  //         name: "Кассетные кондиционеры",
  //         slug: "sub12",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     name: "Кассетные кондиционеры",
  //     slug: "cat5",
  //     img: "/images/categories/1.png",
  //     children: [
  //       {
  //         id: 1,
  //         name: "Кассетные кондиционеры",
  //         slug: "sub13",
  //       },
  //       {
  //         id: 2,
  //         name: "Кассетные кондиционеры",
  //         slug: "sub14",
  //       },
  //       {
  //         id: 3,
  //         name: "Кассетные кондиционеры",
  //         slug: "sub15",
  //       },
  //     ],
  //   },
  // ];
};

export const getCategoryApi = async (slug: string): Promise<CategoryDetail> => {
  const res = await backFetch(`catalog/categories/${slug}/`);
  if (res.status === 404) {
    notFound();
  }
  if (res.status === 301) {
    permanentRedirect(`/catalog${res.headers.get("Location")}`);
  }
  return await res.json();
};
