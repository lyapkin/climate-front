import { ProductBase } from "@/src/entities/product/model/types";
import s from "./styles.module.css";
import { useCart } from "@/src/app/providers/CartProvider/CartProvider";
import { applyDiscountToPrice } from "@/src/entities/product";

const DiscountSum = ({ data }: DiscountSumProps) => {
  const { cart } = useCart();

  const discountSum =
    cart &&
    Object.entries(cart).reduce((sum, [productId, quantity]) => {
      const product = data.find((product) => product.id == Number(productId));
      if (product) {
        const resultPrice = applyDiscountToPrice(
          product.price,
          product.discount
        );

        sum =
          sum +
          (resultPrice === product.price
            ? 0
            : (product.price - resultPrice) * quantity);
      }
      return sum;
    }, 0);

  if (!discountSum) return null;

  return (
    <>
      <div className={s.sum__discountTitle}>
        <span className={s.sum__icon}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.3264 0.209663C10.4861 0.0663223 10.6973 -0.00881318 10.9135 0.000824899C15.4843 0.137655 19.3044 3.4558 19.9967 7.89063C20.0011 7.91711 20.0011 7.94411 19.9967 7.97059C20.0116 8.18043 19.9407 8.38745 19.7996 8.54585C19.6586 8.70425 19.459 8.80099 19.2451 8.81466L11.5656 9.3211C11.3116 9.34362 11.0597 9.26005 10.8718 9.09092C10.6839 8.92179 10.5774 8.68278 10.5785 8.43261L10.0623 0.889316V0.764928C10.0717 0.552776 10.1667 0.353003 10.3264 0.209663ZM9.79965 11.2936L16.4558 10.8671L16.5011 10.8848C16.7869 10.8895 17.0591 11.0054 17.2579 11.207C17.4566 11.4087 17.5655 11.6795 17.5606 11.9599C17.2984 15.782 14.4962 18.9755 10.6828 19.7982C6.86938 20.621 2.96017 18.8754 1.08778 15.5139C0.537217 14.5457 0.189303 13.4794 0.064454 12.3775C0.0160313 12.051 -0.0051696 11.7212 0.00106199 11.3913C0.0136824 7.32706 2.90728 3.81907 6.95607 2.9595C7.4462 2.86776 7.93762 3.11248 8.15146 3.55479C8.20469 3.63505 8.2473 3.72164 8.27824 3.81245C8.35414 4.98405 8.43287 6.14455 8.51126 7.30015C8.57318 8.21277 8.63488 9.12233 8.69482 10.0319C8.69173 10.2462 8.7254 10.4594 8.79444 10.6627C8.95695 11.0627 9.36136 11.3165 9.79965 11.2936Z"
            />
          </svg>
        </span>
        <span className={s.discountTitle__text}>Скидка</span>
      </div>
      <div className={s.sum__discountValue}>{`${discountSum} ₽`}</div>
    </>
  );
};

interface DiscountSumProps {
  data: ProductBase[];
}

export default DiscountSum;
