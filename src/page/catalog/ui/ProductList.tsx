"use client";
import { CardSkeleton, NoResult } from "@/src/shared/ui";
import { ProductCard } from "@/src/widgets/product";
import { useGetProducts } from "@/src/widgets/product/utils";
import { JSX } from "react";
import { ConsultationPlugin } from "./ConsultationPlugin";
import { PromoPlugin } from "@/src/widgets/promo";

const ProductList = () => {
  const { data, isError, isPending } = useGetProducts();

  if (isError) {
    return "Произошла оишбка";
  }

  if (isPending) {
    return (
      <>
        {arr.map((_, index) => {
          return <CardSkeleton key={index} />;
        })}
      </>
    );
  }

  if (data.results.length === 0) {
    return (
      <NoResult
        text="Товары по вашему запросу не найдены. Попробуйте изменить параметры поиска."
        icon={true}
      />
    );
  }

  const content: JSX.Element[] = [];
  data.results.forEach((item, index) => {
    if (index === 4) {
      content.push(<PromoPlugin key={-1} />);
    }
    if (index === 8) {
      content.push(<ConsultationPlugin key={-2} />);
    }
    content.push(<ProductCard key={item.id} product={item} />);
  });

  return <>{content}</>;
};

const arr = [...Array(12)];

export default ProductList;
