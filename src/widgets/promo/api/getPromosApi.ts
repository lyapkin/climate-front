import { backFetch } from "@/src/shared/api";
import { Promo } from "../model";

export const getPromosApi = async (): Promise<Promo[]> => {
  const res = await backFetch("promo/promos/");
  return await res.json();
  return [
    {
      id: 1,
      name: "-25% на установку + бесплатное обслуживание",
      date: "2025-09-10",
      text: "Оформите заявку на водонагреватель BOSH до 10.09.2023",
      img: "/images/promo/1.png",
    },
  ];
};
