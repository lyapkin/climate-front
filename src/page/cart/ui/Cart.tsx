import { Suspense } from "react";
import s from "./styles.module.css";
import cn from "classnames";
import { CartList } from "./CartList";
import { CartForm } from "./CartForm";
import { CartSum } from "./CartSum";

const Cart = () => {
  return (
    <div className="page hero">
      <div className="container">
        <main className={s.cart}>
          <h1 className={cn(s.cart__title, "page-title")}>Корзина</h1>
          <Suspense>
            <CartList className={s.cart__list} />
          </Suspense>
          <CartForm className={s.cart__form} />
          <CartSum className={s.cart__sum} />
        </main>
      </div>
    </div>
  );
};

export default Cart;
