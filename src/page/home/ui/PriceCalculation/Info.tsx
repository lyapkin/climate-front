import Image from "next/image";
import s from "../styles.module.css";

const Info = () => {
  return (
    <div className={s.priceCalculation__info}>
      <div className={s.info__director}>
        <div className={s.info__photo}>
          <Image
            src={"/images/home/calculation/director.png"}
            alt={'Директор компании "Климов Климат"'}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className={s.info__name}>Сергей Климов</p>
        <p className={s.info__position}>Директор компании</p>
      </div>
      <p className={s.info__text}>
        10 лет мы со своей командой помогаем сделать ваши дома и офисы более
        комфортным
      </p>
      <div className={s.info__img}>
        <Image
          src={"/images/home/calculation/info.png"}
          alt={"кондиционер"}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Info;
