import { CatalogLayout } from "@/src/page/catalog";

const Catalog = ({ children }: { children: React.ReactNode }) => {
  return <CatalogLayout>{children}</CatalogLayout>;
};

export default Catalog;
