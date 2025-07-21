import Link from "next/link";
import s from "./styles.module.css";
import cn from "classnames";
import { MailIcon } from "../../icons";

const Email = ({ email, className }: EmailProps) => {
  return (
    <Link href={`mailto:${email}`} className={cn(s.email, className)}>
      <span className={s.email__icon}>
        <MailIcon />
      </span>
      <span className={s.email__text}>{email}</span>
    </Link>
  );
};

interface EmailProps {
  email: string;
  className: string;
}

export default Email;
