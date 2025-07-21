"use client";
import { TrashBinIcon } from "@/src/shared/icons";
import s from "./styles.module.css";
import { Button } from "@/src/shared/ui";
import { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import { useChangeSearchParams } from "@/src/shared/utils/client";
import { useFiltersWrapper } from "./FiltersWrapper";

const Clear = ({
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const changeParams = useChangeSearchParams();
  const { close } = useFiltersWrapper();
  const handleClick = () => {
    const usp = new URLSearchParams();
    changeParams(usp, { noPage: true });
    close();
  };
  return (
    <Button
      variant="secondary"
      className={cn(s.clear, className)}
      {...rest}
      icon={<TrashBinIcon />}
      onClick={handleClick}
    >
      Сбросить фильтры
    </Button>
  );
};

export default Clear;
