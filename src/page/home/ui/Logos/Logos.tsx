import Image from "next/image";
import s from "../styles.module.css";
import cn from "classnames";

const Logos = () => {
  return (
    <section className={cn(s.logosSection, "section")}>
      <div className="container">
        <div className={cn(s.logos, "section-flex")}>
          <h2 className={cn(s.logos__title, "section-title")}>
            Работаем только с проверенными годами производителями
            <br /> систем кондиционирования зарекомендовавших себя качеством
          </h2>
          <div className={s.logos__content}>
            <div className={s.logosContent}>
              {data.map((item, i) => {
                return (
                  <div key={i} className={s.logos__picture}>
                    <div className={s.logos__pictureWrapper}>
                      <Image
                        src={item}
                        alt="Логотип"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const data = [
  "/images/home/logos/1.png",
  "/images/home/logos/2.png",
  "/images/home/logos/3.png",
  "/images/home/logos/4.png",
  "/images/home/logos/1.png",
  "/images/home/logos/2.png",
  "/images/home/logos/3.png",
  "/images/home/logos/4.png",
];

export default Logos;
