import Link from "next/link";
import s from "./styles.module.css";
import cn from "classnames";
import { HTMLAttributes } from "react";

const Agreement = ({ className }: HTMLAttributes<HTMLElement>) => {
  return (
    <p className={cn(s.agreement, className)}>
      Нажимая кнопку вы соглашаетесь c<br />
      <Link href="/privacy/" target="_blank">
        условиями обработки данных
      </Link>
      .
    </p>
  );
};

export default Agreement;
