import s from "./styles.module.css";
import FooterList from "./FooterList";
import { Nav, NavItem } from "@/src/shared/components";

const FooterNav = () => {
  return (
    <div className={s.footer__nav}>
      <FooterList title="Сайт">
        <Nav className={s.footer__list}>
          <NavItem link={"/catalog/"} className={s.footer__listItem}>
            Каталог
          </NavItem>
          <NavItem link={"/about/"} className={s.footer__listItem}>
            О компании
          </NavItem>
          <NavItem link={"/partners/"} className={s.footer__listItem}>
            Партнерам
          </NavItem>
          <NavItem link={"/blog/"} className={s.footer__listItem}>
            Новости
          </NavItem>
          <NavItem link={"/contacts/"} className={s.footer__listItem}>
            Контакты
          </NavItem>
          <NavItem link={"/faq/"} className={s.footer__listItem}>
            FAQ
          </NavItem>
        </Nav>
      </FooterList>
    </div>
  );
};

export default FooterNav;
