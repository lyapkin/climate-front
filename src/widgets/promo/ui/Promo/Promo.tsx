import Image from "next/image";
import s from "./styles.module.css";
import cn from "classnames";
import { ArrowButton, Button } from "@/src/shared/ui";
import Dots from "@/src/shared/components/slider/Dots";
import { PromoDate } from "../PromoDate";
import { getPromosApi } from "../../api";

const Promo = async () => {
  const promos = await getPromosApi();
  return (
    <div className={cn(s.promoSection, "section")}>
      <div className="container">
        <section className={s.promo}>
          <h3 className={s.promo__title}>{promos[0].name}</h3>
          <p className={s.promo__subtitle}>{promos[0].subtitle}</p>
          <PromoDate date={promos[0].date} className={s.promo__date} />
          <div className={s.promo__cta}>
            <Button className={s.cta}>Забронировать</Button>
          </div>
          <div className={s.promo__controls}>
            <ArrowButton direction="left" />
            <ArrowButton direction="right" />
          </div>
          <div className={s.promo__img}>
            <div className={s.img}>
              <Image
                src={promos[0].img}
                alt={"Акция"}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
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
          <div className={s.promo__dots}>
            <Dots amount={5} current={3} />
          </div>
          <div className={s.shadow}></div>
        </section>
      </div>
    </div>
  );
};

export default Promo;
