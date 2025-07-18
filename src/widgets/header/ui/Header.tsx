import s from "./styles.module.css";
import Catalog from "./Catalog";
import { CartLink } from "@/src/entities/cart";
import { Logo, Nav, NavItem, PhoneNumber } from "@/src/shared/components";
import MobileMenu from "./MobileMenu";
import { getContactsApi } from "@/src/entities/contact";

const Header = async () => {
  const contacts = await getContactsApi();
  return (
    <header className={s.headerSection}>
      <div className="container">
        <div className={s.header}>
          <MobileMenu className={s.header__mobile} contacts={contacts} />
          <Logo className={s.header__logo} />
          <Nav className={s.header__nav}>
            <NavItem link={"/blog/?rubric=1"} className={s.header__navItem}>
              Наши работы
            </NavItem>
            <NavItem link={"/services/"} className={s.header__navItem}>
              Услуги
            </NavItem>
            <NavItem link={"/prices/"} className={s.header__navItem}>
              Цены
            </NavItem>
            <NavItem link={"/reviews/"} className={s.header__navItem}>
              Отзывы
            </NavItem>
            <NavItem link={"/faq/"} className={s.header__navItem}>
              FAQ
            </NavItem>
            <NavItem link={"/catalog/"} className={s.header__navItem}>
              Каталог
            </NavItem>
            <NavItem link={"/calculation/"} className={s.header__navItem}>
              Рассчет стоимости
            </NavItem>
            <NavItem link={"/contacts/"} className={s.header__navItem}>
              Контакты
            </NavItem>
          </Nav>
          <PhoneNumber number={contacts.phone} className={s.header__tel} />
          <Catalog className={s.header__catalog} />
          <CartLink className={s.header__cart} />
        </div>
      </div>
    </header>
  );
};

export default Header;
