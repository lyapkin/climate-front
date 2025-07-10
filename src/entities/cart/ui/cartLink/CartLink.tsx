"use client";
import Link from "next/link";
import s from "./styles.module.css";
import CartIcon from "../icons/CartIcon";
import { useCart } from "@/src/app/providers/CartProvider/CartProvider";
import { HTMLAttributes } from "react";
import cn from "classnames";

const CartLink = ({ className }: HTMLAttributes<HTMLElement>) => {
  const { cart } = useCart();

  return (
    <Link
      href={"/cart/"}
      className={cn(s.cartLink, className, { [s.cartLink_loading]: !cart })}
      data-value={
        cart
          ? Object.values(cart).reduce((sum, item) => (sum += item), 0)
          : "..."
      }
    >
      <CartIcon />
    </Link>
  );
};

export default CartLink;
