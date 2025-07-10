import { ButtonHTMLAttributes } from "react";
import { Service } from "../model";
import s from "./styles.module.css";
import cn from "classnames";

const ServiceItem = ({ service, active, ...rest }: ServiceItemProps) => {
  return (
    <button
      key={service.id}
      className={cn(s.content__serviceItem, {
        [s.content__serviceItem_active]: active,
      })}
      {...rest}
    >
      {service.name}
    </button>
  );
};

interface ServiceItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  service: Service;
  active: boolean;
}

export default ServiceItem;
