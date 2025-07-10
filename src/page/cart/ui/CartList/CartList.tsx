"use client";
import cn from "classnames";
// import { useSearchParams } from "next/navigation";
// import FormSubmited from "@/src/shared/ui/form/FormSubmited";
import CartListSkeleton from "./CartListSkeleton";
import EmptyCart from "./EmptyCart";
import ProductCard from "./ProductCard";
import { ChangeCartQunatity, RemoveFromCart } from "@/src/features/cart";
import { useCartProducts } from "../../utils";

const CartList = ({ className }: CartListProps) => {
  const { data, isError, isPending } = useCartProducts();
  // const searchParams = useSearchParams();
  // const orderSubmited = searchParams.get("ordered") ? true : false;

  if (isError) {
    return "Что-то пошло не так";
  }

  if (isPending) {
    return <CartListSkeleton />;
  }

  // if (data.length === 0 && orderSubmited) {
  //   return <FormSubmited />;
  // }

  if (data.length === 0) {
    return <EmptyCart />;
  }

  const content = data.map((item) => {
    return (
      <ProductCard
        key={item.id}
        product={item}
        action={
          <>
            <ChangeCartQunatity itemId={item.id} />
            <RemoveFromCart itemId={item.id} />
          </>
        }
      />
    );
  });

  return <div className={cn(className)}>{content}</div>;
};

interface CartListProps {
  className: string;
}

export default CartList;
