import s from "./styles.module.css";
import cn from "classnames";
import { SubmitHandler, useForm } from "react-hook-form";

import { useCart } from "@/src/app/providers/CartProvider/CartProvider";
import Agreement from "@/src/shared/ui/form/Agreement";
import {
  InputField,
  PhoneField,
  SubmitButton,
  TextareaField,
} from "@/src/shared/ui/form";
import { ManIcon, PhoneIcon } from "@/src/shared/icons";
import { getCookie } from "@/src/shared/utils";
import FieldError from "@/src/shared/ui/form/FieldError";
import { useSucceedFromRequest } from "@/src/shared/utils/client";

const SendOrder = ({ className }: SendOrderProps) => {
  const { cart, setCart } = useCart();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Form>({});
  const succeedRequest = useSucceedFromRequest();

  if (!cart) {
    return null;
  }

  const submitHandler: SubmitHandler<Form> = async (data) => {
    const body: Form & { items: Record<"product" | "quantity", number>[] } = {
      ...data,
      items: Object.entries(cart).map((item) => ({
        product: Number(item[0]),
        quantity: item[1],
      })),
    };

    const url = new URL(
      "requests/order/",
      process.env.NEXT_PUBLIC_API_BASE_URL
    );

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCookie("csrftoken"),
      },
      body: JSON.stringify(body),
    });

    if (res.status !== 201) {
      const error = await res.json();
      console.log(error);
      return;
    }
    setCart({});
    succeedRequest();
  };

  return (
    <form
      className={cn(s.form, className)}
      onSubmit={handleSubmit(submitHandler)}
    >
      <div>
        <InputField
          icon={<ManIcon />}
          className={s.form__field}
          placeholder="Введите имя"
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
          icon={<PhoneIcon />}
          className={s.form__field}
          placeholder="Номер телефона"
          aria-invalid={errors.phone ? true : false}
          {...register("phone", {
            required: "Поле обязательно для заполнения",
            pattern: {
              value: /(^\+\d{9,19}$)|(^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$)/,
              message: "Номер телефона введен неверно",
            },
          })}
        />
        {errors.phone?.message && <FieldError message={errors.phone.message} />}
      </div>
      <TextareaField
        {...register("comment")}
        name="comment"
        placeholder="Комментарий"
        className={s.form__comment}
      />
      <SubmitButton
        className={s.form__button}
        isSending={isSubmitting}
        isSubmited={isSubmitSuccessful}
      >
        Оформить заказ
      </SubmitButton>
      <Agreement />
    </form>
  );
};

interface SendOrderProps {
  className?: string;
}

type Form = {
  name: string;
  phone: string;
  comment: string;
};

export default SendOrder;
