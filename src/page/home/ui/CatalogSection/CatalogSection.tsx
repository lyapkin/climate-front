import s from "../styles.module.css";
import cn from "classnames";
import Catalog from "./Catalog";

const CatalogSection = () => {
  return (
    <section className={"section"}>
      <div className="container">
        <div className={cn(s.catalogSection)}>
          <h2 className={cn(s.catalogSection__title, "section-title")}>
            Предлагаем современные климатические решения по кондиционированию
            воздуха
          </h2>
          <Catalog />
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
