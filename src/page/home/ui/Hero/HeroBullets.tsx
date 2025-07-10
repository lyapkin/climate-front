import Image from "next/image";
import s from "../styles.module.css";

const HeroBullets = () => {
  return (
    <div className={s.hero__bullets}>
      {data.map((item) => {
        return (
          <div className={s.hero__bulletsItem} key={item.id}>
            <p dangerouslySetInnerHTML={{ __html: item.text }} />
            <div>
              <Image
                src={item.img}
                alt={item.text}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const data = [
  {
    id: 1,
    text: "Расходные материалы <b>высокого качества (ГОСТ)</b>",
    img: "/images/home/hero/bullets/1.png",
  },
  {
    id: 2,
    text: "<b>Гарантия</b> на выполненные работы <b>от 60 месяцев</b>",
    img: "/images/home/hero/bullets/2.png",
  },
  {
    id: 3,
    text: "Начнем работы объекте <b>без предоплаты за 2 дня</b>",
    img: "/images/home/hero/bullets/3.png",
  },
];

export default HeroBullets;
