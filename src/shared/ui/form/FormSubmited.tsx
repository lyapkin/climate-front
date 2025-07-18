import { CheckIcon } from "@/src/shared/icons";
import CustomLink from "../CustomLink/CustomLink";
import s from "./styles.module.css";

const FormSubmited = () => {
  return (
    <div className={s.formSubmited}>
      <CheckIcon />
      <span className={s.formSubmited__text}>Спасибо за заказ!</span>
      <CustomLink href={"/catalog/"} className={s.formSubmited__link}>
        Перейти в каталог
      </CustomLink>
    </div>
  );
};

export default FormSubmited;
