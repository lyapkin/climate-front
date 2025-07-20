import { backFetch } from "@/src/shared/api";
import { Contact, Requisites } from "./model";

export const getContactsApi = async (): Promise<Contact> => {
  const res = await backFetch("company/contacts/1/");
  return await res.json();
  // return {
  //   email: "info@klimov_cimate.ru",
  //   phone: "+79221113344",
  //   phones: [{ id: 1, caption: "Сервис", value: "+79221113344" }],
  //   emails: [{ id: 1, caption: "Сервис", value: "info@klimov_cimate.ru" }],
  //   addresses: [
  //     {
  //       id: 1,
  //       city: "Екатеринбург",
  //       address: "ул. Малышева 24",
  //       caption: "Офис",
  //       weekdays: "с 08:00 до 18:00",
  //       weekends: "сб, вс - выходной",
  //       phone: "79992362211",
  //     },
  //   ],
  // };
};

export const getRequisitesApi = async (): Promise<Requisites> => {
  const res = await backFetch("company/requisites/1/");
  return res.json();
  return {
    name: "Климов Климат",
    requisites: [
      {
        id: 1,
        name: "ИНН",
        value: "45345345345",
      },
      {
        id: 2,
        name: "БИК банка",
        value: "64564564564",
      },
      {
        id: 3,
        name: "Банк",
        value: 'АО "Тинькофф Банк"',
      },
    ],
  };
};
