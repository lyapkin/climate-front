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
import { SubmitHandler, useForm } from "react-hook-form";
import { getCookie } from "@/src/shared/utils";
import FieldError from "@/src/shared/ui/form/FieldError";
import { useSucceedFromRequest } from "@/src/shared/utils/client";

const PromoForm = ({ promo, cleanUp }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Form>({});
  const succeedRequest = useSucceedFromRequest();

  const submitHandler: SubmitHandler<Form> = async (data) => {
    const url = new URL(
      "requests/promo/",
      process.env.NEXT_PUBLIC_API_BASE_URL
    );

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCookie("csrftoken"),
      },
      body: JSON.stringify({ ...data, promo }),
    });

    if (res.status !== 201) {
      const error = await res.json();
      console.log(error);
      return;
    }
    cleanUp();
    succeedRequest();
  };
  return (
    <div className={s.formContainer}>
      <form className={s.form} onSubmit={handleSubmit(submitHandler)}>
        <div>
          <InputField
            icon={<ManIcon />}
            placeholder="Введите имя"
            className={cn(s.form__field, s.form__name)}
            aria-invalid={errors.name ? true : false}
            {...register("name", {
              required: "Поле обязательно для заполнения",
              minLength: {
                value: 2,
                message: "Минимальная длина вводимого значения: 2",
              },
              maxLength: {
                value: 32,
                message: "Максимальная длина вводимого значения: 32",
              },
            })}
          />
          {errors.name?.message && <FieldError message={errors.name.message} />}
        </div>
        <div>
          <PhoneField
            placeholder="Номер телефона"
            icon={<PhoneIcon />}
            className={cn(s.form__field, s.form__phone)}
            aria-invalid={errors.phone ? true : false}
            {...register("phone", {
              required: "Поле обязательно для заполнения",
              pattern: {
                value: /(^\+\d{9,19}$)|(^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$)/,
                message: "Номер телефона введен неверно",
              },
            })}
          />
          {errors.phone?.message && (
            <FieldError message={errors.phone.message} />
          )}
        </div>
        <TextareaField
          name="comment"
          placeholder="Комментарий"
          className={s.form__comment}
        />
        <SubmitButton
          className={s.form__button}
          isSending={isSubmitting}
          isSubmited={isSubmitSuccessful}
          text="Забронировать"
        />
        <Agreement className={s.form__agreement} />
      </form>
    </div>
  );
};

interface Props {
  promo: number;
  cleanUp: () => void;
}

type Form = {
  name: string;
  phone: string;
  comment: string;
};

export default PromoForm;
