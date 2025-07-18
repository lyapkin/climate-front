import { Paginated } from "@/src/features/pagination";
import { PostPreview } from "@/src/entities/post";

type Params = Record<"category" | "page", number | null>;

export const getPostsApi = async (
  params: Params
): Promise<Paginated<PostPreview>> => {
  const url = new URL(`blog/posts/`, process.env.NEXT_PUBLIC_API_BASE_URL);
  let key: keyof Params;
  for (key in params) {
    if (params[key]) {
      url.searchParams.set(key, String(params[key]));
    }
  }

  const res = await fetch(url);
  if (res.status === 404) {
    throw new Error("getPostsApi not allowed return 404");
  }
  return await res.json();
  console.log(params);
  return {
    count: 4,
    pages: 1,
    results: [
      {
        id: 1,
        name: "Как выбрать кондиционер для квартиры или дома",
        slug: "slug",
        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        preview: "/images/blog/preview.jpg",
        created: "2025-03-21",
      },
      {
        id: 2,
        name: "Как выбрать кондиционер для квартиры или дома",
        slug: "slug",
        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        preview: "/images/blog/preview.jpg",
        created: "2025-03-21",
      },
      {
        id: 3,
        name: "Как выбрать кондиционер для квартиры или дома",
        slug: "slug",
        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        preview: "/images/blog/preview.jpg",
        created: "2025-03-21",
      },
      {
        id: 4,
        name: "Как выбрать кондиционер для квартиры или дома",
        slug: "slug",
        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        preview: "/images/blog/preview.jpg",
        created: "2025-03-21",
      },
    ],
  };
};
