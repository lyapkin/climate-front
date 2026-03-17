import { getAvitoTokenApi } from "@/src/shared/integrations/avito/api/getTokenApi";
import { Review } from "./model/types";

export const getReviewApi = async (): Promise<Review[]> => {
  if (process.env.ENV === "dev") return devReviews;

  const token = await getAvitoTokenApi();

  if (!token.success) {
    return [];
  }

  try {
    const res = await fetch(
      "https://api.avito.ru/ratings/v1/reviews?offset=0&limit=50",
      {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      },
    );

    if (res.status === 400) {
      const data = await res.json();
      console.log("Неудачный запрос отзывов 400");
      console.log(`${data.error.code} - ${data.error.message}`);
      return [];
    }

    if (res.status === 401) {
      console.log("Неудачный запрос отзывов 401; Требуется аутентификация");
    }

    if (res.status === 403) {
      console.log("Неудачный запрос отзывов 403; Нет доступа");
    }

    if (res.status === 500) {
      console.log("Неудачный запрос отзывов 500");
    }

    if (res.status === 200) {
      const data: Response = await res.json();

      return data.reviews.filter(
        (review) =>
          review.item &&
          review.item.id === 3088567984 &&
          review.stage === "done",
      );
    }
  } catch (err) {
    console.log(err);
  }

  return [];
};

type Response = {
  reviews: {
    id: number;
    score: number;
    text: string;
    item?: {
      id: number;
      title: string;
    };
    sender?: {
      name: string;
    };
    createdAt: number;
    stage: "done";
  }[];
};

const devReviews: Review[] = [
  {
    id: 1,
    score: 5,
    text: "Очень хорошее место, я рекомендую профессиональный сервис только отсутствие красивой отделки",
    createdAt: 1768925202,
    sender: {
      name: "Александр",
    },
  },
  {
    id: 2,
    score: 5,
    text: "Очень хорошее место, я рекомендую профессиональный сервис только отсутствие красивой отделки",
    createdAt: 1768925202,
  },
  {
    id: 3,
    score: 5,
    text: "Очень хорошее место, я рекомендую профессиональный сервис только отсутствие красивой отделки",
    createdAt: 1768925202,
    sender: {
      name: "Александр",
    },
  },
  {
    id: 4,
    score: 5,
    text: "Очень хорошее место, я рекомендую профессиональный сервис только отсутствие красивой отделки",
    createdAt: 1768925202,
    sender: {
      name: "Александр",
    },
  },
  {
    id: 5,
    score: 5,
    text: "Очень хорошее место, я рекомендую профессиональный сервис только отсутствие красивой отделки",
    createdAt: 1768925202,
    sender: {
      name: "Александр",
    },
  },
  {
    id: 6,
    score: 5,
    text: "Очень хорошее место, я рекомендую профессиональный сервис только отсутствие красивой отделки",
    createdAt: 1768925202,
    sender: {
      name: "Александр",
    },
  },
  {
    id: 7,
    score: 5,
    text: "Очень хорошее место, я рекомендую профессиональный сервис только отсутствие красивой отделки",
    createdAt: 1768925202,
    sender: {
      name: "Александр",
    },
  },
  {
    id: 8,
    score: 5,
    text: "Очень хорошее место, я рекомендую профессиональный сервис только отсутствие красивой отделки",
    createdAt: 1768925202,
    sender: {
      name: "Александр",
    },
  },
];
