import { HTMLAttributes } from "react";
import s from "./styles.module.css";
import cn from "classnames";

const PromoDate = ({ date, className }: PromoDateProps) => {
  return (
    <div className={cn(s.date, className)}>
      <span className={s.date__icon}>
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.25 15.5H1.75C0.921573 15.5 0.25 14.8284 0.25 14V3.5C0.25 2.67157 0.921573 2 1.75 2H3.25V0.5H4.75V2H9.25V0.5H10.75V2H12.25C13.0784 2 13.75 2.67157 13.75 3.5V14C13.75 14.8284 13.0784 15.5 12.25 15.5ZM1.75 6.5V14H12.25V6.5H1.75ZM1.75 3.5V5H12.25V3.5H1.75ZM10.75 12.5H9.25V11H10.75V12.5ZM7.75 12.5H6.25V11H7.75V12.5ZM4.75 12.5H3.25V11H4.75V12.5ZM10.75 9.5H9.25V8H10.75V9.5ZM7.75 9.5H6.25V8H7.75V9.5ZM4.75 9.5H3.25V8H4.75V9.5Z" />
        </svg>
      </span>
      <p className={s.date__text}>
        До{" "}
        <time dateTime={date} className={s.date__date}>
          {new Intl.DateTimeFormat("ru-RU", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }).format(new Date(date))}
        </time>
      </p>
    </div>
  );
};

interface PromoDateProps extends HTMLAttributes<HTMLElement> {
  date: string;
}

export default PromoDate;
