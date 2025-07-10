"use client";
import { useSearchParams } from "next/navigation";
import PageNumber from "./PageNumber";
import s from "./styles.module.css";
import cn from "classnames";
import { getPaginationPages } from "../utils";
import { HTMLAttributes, useEffect, useState } from "react";

const Pagination = ({ pages, disabled, className }: PaginationProps) => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const [pagesArr, setPagesArr] = useState<(number | null)[]>([]);

  useEffect(() => {
    if (pages || !disabled) {
      setPagesArr(getPaginationPages(page, pages));
    }
  }, [pages, page, disabled]);

  const content = pagesArr.map((item, index) => {
    return (
      <PageNumber key={String(item) + index} page={item} disabled={disabled} />
    );
  });

  return <ul className={cn(s.pagination, className)}>{content}</ul>;
};

interface PaginationProps extends HTMLAttributes<HTMLElement> {
  pages?: number;
  disabled: boolean;
}

export default Pagination;
