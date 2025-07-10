import s from "./styles.module.css";
import Link from "next/link";
import CheckboxInput from "@/src/shared/ui/form/CheckboxInput";
import { Expender, List } from "@/src/shared/components";
import { ArrowDownIcon } from "@/src/shared/icons";

const FilterLink = async ({
  title,
  prefix,
  current,
  data,
}: FilterLinkProps) => {
  if (!data) return null;

  return (
    <Expender
      header={<span className={s.filter__head}>{title}</span>}
      indicator={<ArrowDownIcon style={{ color: "#7b8990" }} />}
      isOpenDefault={true}
      className={s.filter}
    >
      <List
        className={s.filter__list}
        data={data}
        render={(item) => (
          <Link href={`${prefix}${item.slug}/`}>
            <CheckboxInput
              readOnly
              label={item.name}
              checked={current === item.slug}
            />
          </Link>
        )}
      />
    </Expender>
  );
};

interface FilterLinkProps {
  title: string;
  prefix: string;
  data: {
    id: number | string;
    slug: string;
    name: string;
  }[];
  current?: string;
}

export default FilterLink;
