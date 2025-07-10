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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
        velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
        commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed
        eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam
        nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis
        magna.
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
