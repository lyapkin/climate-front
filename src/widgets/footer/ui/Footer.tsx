import s from "./styles.module.css";
import FooterNav from "./FooterNav";
import FooterCatalog from "./FooterCatalog";
import FooterContacts from "./FooterContacts";
import FooterEmails from "./FooterEmails";
import Bottom from "./Bottom";
import { Logo } from "@/src/shared/components";

const Footer = () => {
  return (
    <footer className={s.footerSection}>
      <div className="container">
        <div className={s.footer}>
          <FooterNav />
          <FooterCatalog />
          <FooterContacts />
          <FooterEmails />
          {/* <div className={s.footer__logo}> */}
          <Logo className={s.footer__logo} />
          {/* </div> */}
          <p className={s.footer__about}>
            Производство и поставка комплектующих для строительных объектов
          </p>
        </div>
      </div>
      <Bottom />
    </footer>
  );
};

export default Footer;
