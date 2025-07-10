"use client";
import CheckboxInput from "@/src/shared/ui/form/CheckboxInput";
import s from "./styles.module.css";
import { useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";
import { Expender, List } from "@/src/shared/components";
import {
  useChangeSearchParams,
  useIsInteractive,
} from "@/src/shared/utils/client";
import { ArrowDownIcon } from "@/src/shared/icons";

const Filter = ({ data, type, title, multiple = false }: FilterProps) => {
  const searchParams = useSearchParams();
  const current = searchParams.getAll(type);
  const changeSearchParams = useChangeSearchParams();

  const isInteractive = useIsInteractive();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const usp = new URLSearchParams(searchParams);

    if (
      current.length === 0 ||
      (current.length > 0 && !multiple && !current.includes(value))
    ) {
      usp.set(type, value);
    } else if (multiple && current.includes(value)) {
      usp.delete(type);

      const val = current.filter((item) => item != value);
      if (val.length > 0) {
        val.forEach((item) => {
          usp.append(type, item);
        });
      }
    } else if (multiple && !current.includes(value)) {
      usp.append(type, value);
    } else {
      usp.delete(type);
    }

    changeSearchParams(usp, { noPage: true });
  };

  return (
    <Expender
      header={<span className={s.filter__head}>{title}</span>}
      indicator={<ArrowDownIcon style={{ color: "#7b8990" }} />}
      isOpenDefault={false}
      className={s.filter}
    >
      <List
        className={s.filter__list}
        data={data}
        render={(item) => (
          <CheckboxInput
            name={type}
            onChange={handleChange}
            label={item.name}
            value={String(item.slug)}
            checked={current.includes(String(item.slug))}
            disabled={!isInteractive}
          />
        )}
      />
    </Expender>
  );
};

interface FilterProps {
  title: string;
  type: string;
  multiple?: boolean;
  data: {
    id: number | string;
    name: string;
    slug: number | string | boolean;
  }[];
}

export default Filter;
