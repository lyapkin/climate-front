import s from "./styles.module.css";
import FooterList from "./FooterList";
import { Nav, NavItem } from "@/src/shared/components";

const FooterNav = () => {
  return (
    <div className={s.footer__nav}>
      <FooterList title="Сайт">
        <Nav className={s.footer__list}>
          <NavItem link={"/blog/?rubric=1"} className={s.footer__listItem}>
            Наши работы
          </NavItem>
          <NavItem link={"/services/"} className={s.footer__listItem}>
            Услуги
          </NavItem>
          <NavItem link={"/prices/"} className={s.footer__listItem}>
            Цены
          </NavItem>
          <NavItem link={"/reviews/"} className={s.footer__listItem}>
            Отзывы
          </NavItem>
          <NavItem link={"/faq/"} className={s.footer__listItem}>
            FAQ
          </NavItem>
          <NavItem link={"/catalog/"} className={s.footer__listItem}>
            Каталог
          </NavItem>
          <NavItem link={"/#calculation"} className={s.footer__listItem}>
            Рассчет стоимости
          </NavItem>
          <NavItem link={"/contacts/"} className={s.footer__listItem}>
            Контакты
          </NavItem>
        </Nav>
      </FooterList>
    </div>
  );
};

export default FooterNav;
