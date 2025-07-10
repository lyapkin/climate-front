"use client";
import { Pagination } from "@/src/features/pagination";
import { useGetProducts } from "@/src/widgets/product/utils";

const CatalogPagination = () => {
  const { data, isError, isPending } = useGetProducts();

  if (isError) {
    return null;
  }

  return <Pagination pages={data?.pages} disabled={isPending} />;
};

export default CatalogPagination;
