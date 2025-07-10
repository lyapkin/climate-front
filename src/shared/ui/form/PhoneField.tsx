"use client";
import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  JSX,
  useState,
} from "react";
import InputField from "./InputField";
import { formatPhoneNumber } from "@/src/shared/utils";

const PhoneField = ({ icon, ...rest }: PhoneFieldProps) => {
  const { onChange, className, ...attrs } = rest;
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const dirtyValue = input.value;

    setValue(formatPhoneNumber(dirtyValue));
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <InputField
      type="tel"
      icon={icon}
      onChange={handleChange}
      value={value}
      className={className}
      {...attrs}
    />
  );
};

interface PhoneFieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: JSX.Element;
}

export default PhoneField;
