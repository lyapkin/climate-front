import { SearchBar } from "@/src/features/search";
import { CustomLink } from "@/src/shared/ui";
import { Contact } from "@/src/widgets/consultation";
import s from "./styles.module.css";
import Bullets from "./Bullets";
import ProductContent from "./ProductContent";
import { ProductDetail } from "@/src/entities/product/model";
import { Suspense } from "react";

const Product = async ({ product }: ProductProps) => {
  return (
    <>
      <div className="page hero">
        <div className="container">
          <div className={s.layout}>
            <Suspense>
              <SearchBar className={s.layout__search} />
            </Suspense>
            <CustomLink href={"/catalog/"} className={s.layout__catalog}>
              Каталог комплектующих
            </CustomLink>
          </div>
          <main className={s.product}>
            <ProductContent product={product} />
            <Bullets />
          </main>
        </div>
      </div>
      <Contact />
    </>
  );
};

interface ProductProps {
  product: ProductDetail;
}

export default Product;
