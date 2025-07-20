import { Button } from "@/src/shared/ui";
import s from "./styles.module.css";
import { PromoDate } from "../PromoDate";
import { usePromos } from "../../api";
import { Skeleton } from "@/src/shared/ui/loading";

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
  return data.length > 0 ? (
    <div className={s.promo}>
      <p className={s.promo__title}>{data[0].name}</p>
      <p className={s.promo__subtitle}>{data[0].text}</p>
      <PromoDate date={data[0].date} className={s.promo__date} />
      <Button className={s.promo__button}>Забронировать</Button>
    </div>
  ) : null;
};

export default PromoPlugin;
