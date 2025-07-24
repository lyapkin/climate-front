import Image from "next/image";
import s from "../styles.module.css";
import cn from "classnames";
import LogosContent from "./LogosContent";

const Logos = () => {
  const content = data.map((item, i) => {
    return (
      <div className={s.logos__pictureWrapper} key={i}>
        <Image src={item} alt="Логотип" fill style={{ objectFit: "contain" }} />
      </div>
    );
  });
  return (
    <section className={cn(s.logosSection, "section")}>
      <div className="container">
        <div className={s.logos}>
          <h2 className={cn(s.logos__title, "section-title")}>
            Работаем только с проверенными годами производителями
            <br /> систем кондиционирования зарекомендовавших себя качеством
          </h2>
          <LogosContent content={content} />
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
