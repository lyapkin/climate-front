import RequisitesBlock from "./RequisitesBlock";
import s from "./styles.module.css";
import cn from "classnames";
import ContactBlock from "./ContactBlock";

import { getPageApi } from "@/src/shared/api";
import { Contact } from "@/src/widgets/consultation";
import { getContactsApi, getRequisitesApi } from "@/src/entities/contact";

const Contacts = async () => {
  const [page, requisites, contacts] = await Promise.all([
    getPageApi("contacts"),
    getRequisitesApi(),
    getContactsApi(),
  ]);
  return (
    <>
      <div className="page hero">
        <div className="container">
          <main className={s.contacts}>
            <h1 className={cn(s.contacts__title, "page-title")}>
              {page.title}
            </h1>
            <div className={s.contacts__list}>
              {contacts.addresses.map((item) => {
                return <ContactBlock key={item.id} contact={item} />;
              })}
            </div>
            <RequisitesBlock requisites={requisites} />
          </main>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Contacts;
