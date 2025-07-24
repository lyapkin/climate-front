import { getCategoriesApi } from "@/src/entities/category/api";
import Categories from "./Categories";

const Catalog = async () => {
  const categories = await getCategoriesApi();
  return <Categories categories={categories} />;
};

export default Catalog;
