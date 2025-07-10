"use client";
import DiscountSum from "./DiscountSum";
import ResultSum from "./ResultSum";
import s from "./styles.module.css";
import cn from "classnames";
import { useCartProducts } from "../../utils";

const CartSum = ({ className }: CartSumProps) => {
  const { data, isError, isPending } = useCartProducts();

  if (isError || isPending || data.length === 0) {
    return null;
  }

  return (
    <div className={cn(s.sum, className)}>
      <DiscountSum data={data} />
      <ResultSum data={data} />
    </div>
  );
};

interface CartSumProps {
  className: string;
}

export default CartSum;
