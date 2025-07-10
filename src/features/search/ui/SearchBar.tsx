"use client";
import cn from "classnames";
import SearchIcon from "./icons/SearchIcon";
import s from "./styles.module.css";
import useIsInteractive from "@/src/shared/utils/client/useIsInteractive";
import useChangeSearchParams from "@/src/shared/utils/client/useChangeSearchParams";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = ({
  placeholder = "Поиск",
  className,
  pathPrefix,
}: SearchBarProps) => {
  const isInteractive = useIsInteractive();
  const searchParams = useSearchParams();
  const currentValue = searchParams.get("search") || "";
  const router = useRouter();

  const changeSearchParams = useChangeSearchParams();
  const searchAction = (data: FormData) => {
    const value = (data.get("search") as string | null) || "";

    const sort = searchParams.get("sort");
    const urlSearchParams = new URLSearchParams();
    if (sort) {
      urlSearchParams.set("sort", sort);
    }
    if (value) {
      urlSearchParams.set("search", value);
    } else {
      urlSearchParams.delete("search");
    }

    if (!pathPrefix) {
      changeSearchParams(urlSearchParams, { noPage: true });
    } else {
      router.push(`${pathPrefix}?` + urlSearchParams.toString());
    }
  };

  return (
    <form className={cn(s.search, className)} action={searchAction}>
      <input
        name="search"
        className={s.search__input}
        defaultValue={currentValue}
        placeholder={placeholder}
        disabled={!isInteractive}
      />
      <button className={s.search__button} disabled={!isInteractive}>
        <SearchIcon />
      </button>
    </form>
  );
};

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  pathPrefix?: string;
}

export default SearchBar;
