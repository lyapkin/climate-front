import Link from "next/link";
import s from "./styles.module.css";
import cn from "classnames";
import PhoneIcon from "@/src/shared/icons/PhoneIcon";
import { formatPhoneNumber } from "@/src/shared/utils";

const PhoneNumber = ({ number, className }: PhoneNumberProps) => {
  return (
    <Link href={`tel:${number}`} className={cn(s.tel, className)}>
      <span className={s.tel__icon}>
        <PhoneIcon />
      </span>
      <span className={s.tel__text}>{formatPhoneNumber(number)}</span>
    </Link>
  );
};

interface PhoneNumberProps {
  number: string;
  className?: string;
}

export default PhoneNumber;
