import { CustomLink } from "@/src/shared/ui";
import s from "./styles.module.css";

const EmptyCart = () => {
  return (
    <div className={s.emptyCart}>
      <p className={s.emptyCart__text}>В корзине нет товаров</p>
      <CustomLink href={"/catalog/"} className={s.emptyCart__link}>
        Перейти в каталог
      </CustomLink>
    </div>
  );
};

export default EmptyCart;
