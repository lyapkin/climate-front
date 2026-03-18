import { Service } from "../model";
import { cacheTag } from "next/cache";

export const getServicesApi = async (): Promise<Service[]> => {
  "use cache";
  cacheTag("services");

  const url = new URL("services/", process.env.NEXT_PUBLIC_API_BASE_URL);
  const res = await fetch(url);
  return await res.json();
};
