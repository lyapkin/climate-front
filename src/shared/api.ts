import { Page } from "@/src/shared/types";

export const backFetch = async (
  path: string,
  options?: { revalidate?: number; redirect?: "follow" | "manual" | "error" }
) => {
  const url = new URL(path, process.env.NEXT_PUBLIC_API_BASE_URL);
  const res = await fetch(url, {
    next: {
      revalidate: options?.revalidate || 0,
    },
    redirect: options?.redirect || "follow",
  });
  return res;
};

export const getPageApi = async (slug: string): Promise<Page> => {
  // const response = await backFetch(`pages/static/${slug}/`);

  // return await response.json();

  const data: Record<string, Page> = {
    home: {
      id: 1,
      slug: "home",
      title: "Продажа, установка<br>и обслуживание климатического оборудования",
      metadata: null,
    },
    catalog: {
      id: 2,
      slug: "catalog",
      title: "Каталог",
      metadata: null,
    },
    faq: {
      id: 2,
      slug: "faq",
      title: "FAQ",
      metadata: null,
    },
    reviews: {
      id: 2,
      slug: "reviews",
      title: "Оцените отзывы о нас на авито",
      metadata: null,
    },
    blog: {
      id: 2,
      slug: "blog",
      title: "Блог",
      metadata: null,
    },
    contacts: {
      id: 2,
      slug: "contacts",
      title: "Контакты",
      metadata: null,
    },
    services: {
      id: 2,
      slug: "services",
      title: "Услуги",
      metadata: null,
    },
  };

  return data[slug];
};
