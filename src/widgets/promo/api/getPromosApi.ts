import { Promo } from "../model";

export const getPromosApi = async (): Promise<Promo[]> => {
  const url = new URL("promo/promos/", process.env.NEXT_PUBLIC_API_BASE_URL);
  const res = await fetch(url);
  return await res.json();
};
