import { backFetch } from "@/src/shared/api";
import { Service } from "../model";

export const getServicesApi = async (): Promise<Service[]> => {
  const res = await backFetch("services/");
  return await res.json();
};
