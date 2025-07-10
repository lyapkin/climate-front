import { ProductBase, ProductCartResponse } from "@/src/entities/product";

export const getCartProductsApi = async (
  ids: ProductBase["id"][]
): Promise<ProductCartResponse[]> => {
  if (ids.length == 0) return [];

  const url = new URL("catalog/cart/", process.env.NEXT_PUBLIC_API_BASE_URL);

  url.searchParams.set("id", ids.join(","));

  const res = await fetch(url);

  return await res.json();

  // console.log(ids);

  // return [
  //   {
  //     id: 1,
  //     name: "Сплит система BOSCH WBN6000-18H RN S5700 одноконтурный",
  //     slug: "slug4",
  //     stock: true,
  //     attrs: [
  //       { id: 1, attr: "Марка", value: "Bosh" },
  //       { id: 2, attr: "Артикул", value: "7736900199RU" },
  //       { id: 3, attr: "Мощность", value: "– 24 кВт" },
  //     ],
  //     img: "/images/product/1.png",
  //     prices: [{ id: 1, price: 14534, discount: 20, name: "" }],
  //     code: "FX8932423",
  //   },
  //   {
  //     id: 2,
  //     name: "Сплит система BOSCH WBN6000-18H RN S5700 одноконтурный",
  //     slug: "slug4",
  //     stock: true,
  //     attrs: [
  //       { id: 1, attr: "Марка", value: "Bosh" },
  //       { id: 2, attr: "Артикул", value: "7736900199RU" },
  //       { id: 3, attr: "Мощность", value: "– 24 кВт" },
  //     ],
  //     img: "/images/product/1.png",
  //     prices: [{ id: 2, price: 11530, discount: 15, name: "" }],
  //     code: "FX8932424",
  //   },
  // ];
};
