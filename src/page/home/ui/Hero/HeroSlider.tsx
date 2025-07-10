import Image from "next/image";
import s from "../styles.module.css";
import cn from "classnames";
import LongArrowIcon from "@/src/shared/icons/LongArrowIcon";

const HeroSlider = () => {
  return (
    <>
      <div className={s.hero__slider}>
        <Image
          src={"/images/home/hero/slider/1.png"}
          alt="Кондиционер"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={s.hero__sliderButtons}>
        <button
          className={cn(s.sliderButtons__button, s.sliderButtons__back, {
            [s.sliderButtons__button_active]: false,
          })}
        >
          <LongArrowIcon />
          <span>Назад</span>
        </button>
        <button
          className={cn(s.sliderButtons__button, s.sliderButtons__forward, {
            [s.sliderButtons__button_active]: true,
          })}
        >
          <span>Далее</span>
          <LongArrowIcon />
        </button>
      </div>
    </>
  );
};

export default HeroSlider;
