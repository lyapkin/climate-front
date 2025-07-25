import {
  Agreement,
  InputField,
  PhoneField,
  SubmitButton,
  TextareaField,
} from "@/src/shared/ui/form";
import s from "./styles.module.css";
import cn from "classnames";
import { ManIcon, PhoneIcon } from "@/src/shared/icons";

const PromoForm = () => {
  return (
    <div className={s.formContainer}>
      <form className={s.form}>
        <div>
          <InputField
            icon={<ManIcon />}
            placeholder="Введите имя"
            className={cn(s.form__field, s.form__name)}
          />
        </div>
        <div>
          <PhoneField
            placeholder="Номер телефона"
            icon={<PhoneIcon />}
            className={cn(s.form__field, s.form__phone)}
          />
        </div>
        <TextareaField
          name="comment"
          placeholder="Комментарий"
          className={s.form__comment}
        />
        <SubmitButton
          className={s.form__button}
          isSending={false}
          isSubmited={false}
          text="Забронировать"
        />
        <Agreement className={s.form__agreement} />
      </form>
    </div>
  );
};

export default PromoForm;
