import { applyDiscountToPrice } from "../../utils";

const ResultPrice = ({ price, discount, className }: ResultPriceProps) => {
  return (
    <span className={className}>{`${applyDiscountToPrice(
      price,
      discount
    )} ₽`}</span>
  );
};

interface ResultPriceProps {
  price: number;
  discount?: number;
  className?: string;
}

export default ResultPrice;
