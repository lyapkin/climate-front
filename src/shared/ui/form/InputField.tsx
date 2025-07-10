import { DetailedHTMLProps, InputHTMLAttributes, JSX } from "react";
import s from "./styles.module.css";
import cn from "classnames";

const InputField = ({
  placeholder,
  className,
  icon,
  ...rest
}: InputFieldProps) => {
  return (
    <>
      <label className={cn(s.inputField, className)}>
        {icon && <span className={s.inputField__icon}>{icon}</span>}
        <input type="text" {...rest} placeholder={placeholder} />
      </label>
    </>
  );
};

interface InputFieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: JSX.Element;
}

export default InputField;
