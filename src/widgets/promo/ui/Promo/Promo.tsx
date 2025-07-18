import s from "./styles.module.css";
import cn from "classnames";
import { getPromosApi } from "../../api";
import PromoContent from "./PromoContent";

const Promo = async () => {
  const promos = await getPromosApi();

  if (promos.length === 0) {
    return null;
  }

  return (
    <div className={cn(s.promoSection, "section")}>
      <div className="container">
        <section className={s.promo}>
          <PromoContent promos={promos} />
          <div className={s.promo__aside}>
            <p className={s.aside__title}>
              Забронируйте позицию через наш сайт и получите:
            </p>
            <ul className={s.aside__list}>
              <li className={s.aside__item}>
                Бесплатная установка водообогревателя для новых клиентов
              </li>
              <li className={s.aside__item}>
                Бесплатная доставка запчастей для котлов
              </li>
              <li className={s.aside__item}>Скидка на установку</li>
            </ul>
          </div>
          <div className={s.shadow}></div>
        </section>
      </div>
    </div>
  );
};

export default Promo;
