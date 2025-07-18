import { ProductBase } from "@/src/entities/product";
import s from "./styles.module.css";

const Discount = ({ discount }: DiscountProps) => {
  return (
    discount && <span className={s.card__discount}>-{discount}% Скидка</span>
  );
};

export interface DiscountProps {
  discount?: ProductBase["discount"];
}

export default Discount;
