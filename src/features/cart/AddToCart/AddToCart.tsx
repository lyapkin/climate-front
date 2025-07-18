"use client";
import Button from "@/src/shared/ui/Button/Button";
import s from "./styles.module.css";
import { useCart } from "@/src/app/providers/CartProvider/CartProvider";
import Spinner from "@/src/shared/ui/loading/spinners/Spinner";
import { ButtonHTMLAttributes } from "react";
import { CartIcon } from "@/src/entities/cart";
import cn from "classnames";
import { CheckIcon } from "@/src/shared/icons";

const AddToCart = ({ itemId, className, ...rest }: AddToCartProps) => {
  const { cart, plusItem } = useCart();

  if (!cart) {
    return (
      <Button {...rest} className={cn(s.addToCart, className)} disabled>
        <Spinner />
      </Button>
    );
  }

  const itemInCart = itemId in cart;
  return (
    <Button
      {...rest}
      className={cn(s.addToCart, className)}
      onClick={!itemInCart ? () => plusItem(itemId) : () => {}}
    >
      {itemInCart ? (
        <>
          <span>В корзине</span> <CheckIcon />
        </>
      ) : (
        <>
          <span>В корзину</span> <CartIcon />
        </>
      )}
    </Button>
  );
};

interface AddToCartProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  itemId: number;
}

export default AddToCart;
