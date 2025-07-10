const FullPrice = ({ price, discount, className }: FullPriceProps) => {
  return discount ? (
    <span
      className={className}
      style={{ textDecoration: "line-through" }}
    >{`${price} ₽`}</span>
  ) : null;
};

interface FullPriceProps {
  price: number;
  discount?: number;
  className?: string;
}

export default FullPrice;
