import { PropsWithChildren } from "react";
import s from "./styles.module.css";
import cn from "classnames";

const Btn = ({ onClick, active = false, children }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(s.btn, {
        [s.btn_active]: active,
      })}
    >
      {children}
    </button>
  );
};

interface Props extends PropsWithChildren {
  onClick: () => void;
  active?: boolean;
}

export default Btn;
