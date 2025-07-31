import s from "./styles.module.css";
import cn from "classnames";

const Bullets = () => {
  return (
    <div className={cn(s.product__plugin, s.bullets)}>
      {data.map((item, i) => {
        return (
          <div
            key={i}
            className={s.bullets__item}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            {item.top}
            {item.bottom}
          </div>
        );
      })}
    </div>
  );
};

const data = [
  {
    top: <span>Пожизненный срок службы</span>,
    bottom: <span>на все комплектующие</span>,
    img: "/images/product/bullets/1.webp",
  },
  {
    top: <span>Возникли вопросы ?</span>,
    bottom: <span>проконсультируем</span>,
    img: "/images/product/bullets/2.webp",
  },
  {
    top: <span>Купите комплектующие</span>,
    bottom: <span>в офисе продаж</span>,
    img: "/images/product/bullets/3.webp",
  },
];

export default Bullets;
