import { Contact, Requisites } from "./model";
import { cacheTag } from "next/cache";

export const getContactsApi = async (): Promise<Contact> => {
  "use cache";
  cacheTag("contacts");

  const url = new URL(
    "company/contacts/1/",
    process.env.NEXT_PUBLIC_API_BASE_URL,
  );
  const res = await fetch(url);
  return await res.json();
};

export const getRequisitesApi = async (): Promise<Requisites> => {
  "use cache";
  cacheTag("requisites");

  const url = new URL(
    "company/requisites/1/",
    process.env.NEXT_PUBLIC_API_BASE_URL,
  );
  const res = await fetch(url);
  return await res.json();
};
