import { Category } from "@/src/entities/category/model/types";
import s from "./styles.module.css";
import { List } from "@/src/shared/components";
import Link from "next/link";
import Image from "next/image";
import LongArrowIcon from "@/src/shared/icons/LongArrowIcon";

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <article className={s.card}>
      <h3 className={s.card__title}>{category.name}</h3>
      <List
        data={category.children}
        render={(item) => (
          <Link href={`/catalog/${item.slug}/`} className={s.card__itemLink}>
            {item.name}
          </Link>
        )}
        className={s.card__list}
        itemClassName={s.card__item}
      />
      {category.img && (
        <div className={s.card__img}>
          <Image
            src={category.img}
            alt={category.name}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
      <Link href={`/catalog/${category.slug}/`} className={s.card__link}>
        Подробнее <LongArrowIcon />
      </Link>
    </article>
  );
};

interface CategoryCardProps {
  category: Category;
}

export default CategoryCard;
