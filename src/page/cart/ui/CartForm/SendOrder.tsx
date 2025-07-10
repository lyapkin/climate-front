import s from "./styles.module.css";
import cn from "classnames";
// import { SubmitHandler, useForm } from "react-hook-form";

import { useCart } from "@/src/app/providers/CartProvider/CartProvider";
import Agreement from "@/src/shared/ui/form/Agreement";
import {
  InputField,
  PhoneField,
  SubmitButton,
  TextareaField,
} from "@/src/shared/ui/form";
import { ManIcon, PhoneIcon } from "@/src/shared/icons";

const SendOrder = ({ className }: SendOrderProps) => {
  const {
    cart,
    // setCart
  } = useCart();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitting, isSubmitSuccessful },
  // } = useForm<Form>({});
  // const changeSearchParams = useChangeSearchParams();

  if (!cart) {
    return null;
  }

  // const submitHandler: SubmitHandler<Form> = async (data) => {
  //   const body: Form & { items: Record<"variant" | "quantity", number>[] } = {
  //     ...data,
  //     items: Object.entries(cart).map((item) => ({
  //       variant: Number(item[0]),
  //       quantity: item[1],
  //     })),
  //   };

  //   const url = new URL(
  //     "requests/order/",
  //     process.env.NEXT_PUBLIC_API_BASE_URL
  //   );

  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-CSRFToken": getCookie("csrftoken"),
  //     },
  //     body: JSON.stringify(body),
  //   });

  //   if (res.status !== 201) {
  //     const error = await res.json();
  //     console.log(error);
  //     return;
  //   }
  //   setCart({});
  //   const usp = new URLSearchParams({ ordered: "success" });
  //   changeSearchParams(usp);
  // };

  return (
    <form
      className={cn(s.form, className)}
      // onSubmit={handleSubmit(submitHandler)}
    >
      <div>
        <InputField
          icon={<ManIcon />}
          className={s.form__field}
          placeholder="Введите имя"
          // aria-invalid={errors.name ? true : false}
          // {...register("name", {
          //   required: "Поле обязательно для заполнения",
          //   minLength: {
          //     value: 2,
          //     message: "Минимальная длина вводимого значения: 2",
          //   },
          //   maxLength: {
          //     value: 32,
          //     message: "Максимальная длина вводимого значения: 32",
          //   },
          // })}
        />
        {/* {errors.name?.message && <FieldError message={errors.name.message} />} */}
      </div>
      <div>
        <PhoneField
          icon={<PhoneIcon />}
          className={s.form__field}
          placeholder="Номер телефона"
          // {...register("phone", {
          //   required: "Поле обязательно для заполнения",
          //   pattern: {
          //     value: /(^\+\d{9,19}$)|(^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$)/,
          //     message: "Номер телефона введен неверно",
          //   },
          // })}
          // aria-invalid={errors.phone ? true : false}
        />
        {/* {errors.phone?.message && <FieldError message={errors.phone.message} />} */}
      </div>
      <TextareaField
        // {...register("comment")}
        name="comment"
        placeholder="Комментарий"
        className={s.form__comment}
      />
      <SubmitButton
        className={s.form__button}
        // isSending={isSubmitting}
        // isSubmited={isSubmitSuccessful}
        isSending={false}
        isSubmited={false}
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

// type Form = {
//   name: string;
//   phone: string;
//   comment: string;
// };

export default SendOrder;
