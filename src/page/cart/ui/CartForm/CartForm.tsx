"use client";
import s from "./styles.module.css";
import cn from "classnames";
import { Skeleton } from "@/src/shared/ui/loading";
import { useCartProducts } from "../../utils";
import SendOrder from "./SendOrder";

const CartForm = ({ className }: CartFormProps) => {
  const { data, isError, isPending } = useCartProducts();

  if (isError) {
    return null;
  }

  if (isPending) {
    return (
      <div className={s.className}>
        <Skeleton />
      </div>
    );
  }

  if (data.length === 0) {
    return null;
  }

  return (
    <div className={cn(s.cartForm, className)}>
      <p className={s.cartForm__title}>Введите контактные данные</p>
      <SendOrder />
    </div>
  );
};

interface CartFormProps {
  className: string;
}

export default CartForm;
