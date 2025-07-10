import { Promo } from "../model";

export const getPromosApi = async (): Promise<Promo[]> => {
  return [
    {
      id: 1,
      name: "-25% на установку + бесплатное обслуживание",
      date: "2025-09-10",
      subtitle: "Оформите заявку на водонагреватель BOSH до 10.09.2023",
      img: "/images/promo/1.png",
    },
  ];
};
