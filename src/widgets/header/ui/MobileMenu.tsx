"use client";
import s from "./styles.module.css";
import { HTMLAttributes, MouseEvent, useState } from "react";
import cn from "classnames";
import { CartLink } from "@/src/entities/cart";
import { useCloseByClickOutside } from "@/src/shared/utils/client";
import { CloseIcon } from "@/src/shared/icons";
import BurgerIcon from "./BurgerIcon";
import { Nav, NavItem, PhoneNumber } from "@/src/shared/components";
import { Contact } from "@/src/entities/contact";

const MobileMenu = ({ className, contacts }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useCloseByClickOutside(() => setIsOpen(false));

  const handleLinkClick = (e: MouseEvent<HTMLDivElement>) => {
    if (
      e.target instanceof Element &&
      (e.target.nodeName === "A" || e.target.closest("a"))
    ) {
      // setIsOpen(false);
    }
  };

  return (
    <div
      className={cn(s.mobileMenu, className, {
        [s.mobileMenu_open]: isOpen,
        [s.mobileMenu_closed]: !isOpen,
      })}
      ref={ref}
    >
      <button
        className={s.mobileMenu__button}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <CloseIcon /> : <BurgerIcon />}
      </button>
      <div
        className={cn(s.mobileMenuWrapper, {
          [s.mobileMenuWrapper_open]: isOpen,
          [s.mobileMenuWrapper_closed]: !isOpen,
        })}
      >
        <div className={s.mobileMenuContent} onClick={handleLinkClick}>
          <Nav className={s.mobileMenu__navList}>
            <NavItem link={"/faq/"} className={s.mobileMenu__navItem}>
              FAQ
            </NavItem>
            <NavItem link={"/about/"} className={s.mobileMenu__navItem}>
              О компании
            </NavItem>
            <NavItem link={"/partners/"} className={s.mobileMenu__navItem}>
              Партнерам
            </NavItem>
            <NavItem link={"/blog/"} className={s.mobileMenu__navItem}>
              Новости
            </NavItem>
            <NavItem link={"/contacts/"} className={s.mobileMenu__navItem}>
              Контакты
            </NavItem>
          </Nav>
          <PhoneNumber number={contacts.phone} className={s.mobileMenu__tel} />
          <div className={s.mobileMenu__cart}>
            <CartLink />
          </div>
        </div>
      </div>
    </div>
  );
};

interface MobileMenuProps extends HTMLAttributes<HTMLElement> {
  contacts: Contact;
}

export default MobileMenu;
