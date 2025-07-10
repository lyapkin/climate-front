import { getContactsApi } from "@/src/entities/contact";
import s from "./styles.module.css";
import { List, PhoneNumber } from "@/src/shared/components";

const FooterContacts = async () => {
  const contacts = await getContactsApi();

  return (
    <>
      <div className={s.footer__contacts}>
        <p className={s.footer__title}>Контакты</p>
        <PhoneNumber number={contacts.phone} className={s.footer__mainNumber} />
        <List
          className={s.footer__telList}
          data={contacts.phones}
          render={(item) => (
            <div className={s.footer__telItem}>
              <span className={s.telItem__text}>{item.caption}</span>
              <PhoneNumber number={item.value} className={s.footer__number} />
            </div>
          )}
        />
      </div>
      <div className={s.footer__social}>
        <div className={s.footer__socialList}>
          {/* <TelegramLink link={contacts.tg} />
          <WhatsappLink link={contacts.wa} /> */}
        </div>
      </div>
    </>
  );
};

export default FooterContacts;
