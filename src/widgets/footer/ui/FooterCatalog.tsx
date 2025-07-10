import s from "./styles.module.css";
import Link from "next/link";
import FooterList from "./FooterList";
import { getCategoriesApi } from "@/src/entities/category/api";
import { List } from "@/src/shared/components";

const FooterCatalog = async () => {
  const groups = await getCategoriesApi();
  return (
    <div className={s.footer__catalog}>
      <FooterList title="Каталог товаров">
        <List
          data={groups}
          render={(item) => (
            <Link
              href={`/catalog/${item.slug}/`}
              className={s.footer__listItem}
            >
              {item.name}
            </Link>
          )}
          className={s.footer__list}
        />
      </FooterList>
    </div>
  );
};

export default FooterCatalog;
