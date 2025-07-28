"use client";
import { ArrowButton } from "@/src/shared/ui";
import { Promo } from "../../model";
import { PromoDate } from "../PromoDate";
import s from "./styles.module.css";
import Image from "next/image";
import Dots from "@/src/shared/components/slider/Dots";
import { useState } from "react";
import { PromoBook } from "../PromoBook";

const PromoContent = ({ promos }: PromoContentProps) => {
  const [currentPromo, setCurrentPromo] = useState<number>(0);
  return (
    <>
      <h3 className={s.promo__title}>{promos[currentPromo].name}</h3>
      <p className={s.promo__subtitle}>{promos[currentPromo].text}</p>
      <PromoDate date={promos[currentPromo].date} className={s.promo__date} />
      <PromoBook className={s.promo__cta} promoId={promos[currentPromo].id} />
      <div className={s.promo__controls}>
        <ArrowButton
          direction="left"
          onClick={() => setCurrentPromo((prev) => prev - 1)}
          disabled={currentPromo === 0}
        />
        <ArrowButton
          direction="right"
          onClick={() => setCurrentPromo((prev) => prev + 1)}
          disabled={currentPromo === promos.length - 1}
        />
      </div>
      <div className={s.promo__img}>
        <div className={s.img}>
          <Image
            src={promos[currentPromo].img}
            alt={"Акция"}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className={s.promo__dots}>
        <Dots
          amount={promos.length}
          current={currentPromo}
          onClick={(i) => setCurrentPromo(i)}
        />
      </div>
    </>
  );
};

interface PromoContentProps {
  promos: Promo[];
}

export default PromoContent;
