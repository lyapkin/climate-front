// import { Button } from "@/src/shared/ui";
import s from "./styles.module.css";
import { PromoDate } from "../PromoDate";
import { usePromos } from "../../api";
import { Skeleton } from "@/src/shared/ui/loading";
import { PromoBook } from "../PromoBook";
import { getRandomInteger } from "@/src/shared/utils";

const PromoPlugin = () => {
  const { data, isPending, isError } = usePromos();

  if (isError) {
    return <div className={s.promo}>Что-то пошло не так</div>;
  }

  if (isPending) {
    return (
      <div className={s.promo}>
        <Skeleton />
      </div>
    );
  }

  if (data.length <= 0) {
    return null;
  }

  const currentPromo = getRandomInteger(0, data.length - 1);
  return (
    <div className={s.promo}>
      <p className={s.promo__title}>{data[currentPromo].name}</p>
      <p className={s.promo__subtitle}>{data[currentPromo].text}</p>
      <PromoDate date={data[currentPromo].date} className={s.promo__date} />
      <PromoBook className={s.promo__button} promoId={data[currentPromo].id} />
    </div>
  );
};

export default PromoPlugin;
