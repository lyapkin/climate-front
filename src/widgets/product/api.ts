import { ProductPreview } from "@/src/entities/product";
import { Paginated } from "@/src/features/pagination";

export const getProductsApi = async (
  params: URLSearchParams
): Promise<Paginated<ProductPreview>> => {
  const searchParams = params.toString();

  const url = new URL(
    searchParams ? `catalog/products/?${searchParams}` : "catalog/products/",
    process.env.NEXT_PUBLIC_API_BASE_URL
  );
  const res = await fetch(url);
  return res.json();

  // console.log(params);
  // return {
  //   count: 4,
  //   pages: 2,
  //   results: [
  //     {
  //       id: 1,
  //       name: "Сплит система BOSCH WBN6000-18H RN S5700 одноконтурный",
  //       slug: "slug1",
  //       stock: true,
  //       attrs: [
  //         { id: 1, attr: "Марка", value: "Bosh" },
  //         { id: 2, attr: "Артикул", value: "7736900199RU" },
  //         { id: 3, attr: "Мощность", value: "– 24 кВт" },
  //       ],
  //       img: "/images/product/1.png",
  //       price: { id: 1, price: 14534, discount: 20, name: "", single: true },
  //     },
  //     {
  //       id: 2,
  //       name: "Сплит система BOSCH WBN6000-18H RN S5700 одноконтурный",
  //       slug: "slug2",
  //       stock: true,
  //       attrs: [
  //         { id: 1, attr: "Марка", value: "Bosh" },
  //         { id: 2, attr: "Артикул", value: "7736900199RU" },
  //         { id: 3, attr: "Мощность", value: "– 24 кВт" },
  //       ],
  //       img: "/images/product/1.png",
  //       price: { id: 1, price: 14534, discount: 20, name: "", single: true },
  //     },
  //     {
  //       id: 3,
  //       name: "Сплит система BOSCH WBN6000-18H RN S5700 одноконтурный",
  //       slug: "slug3",
  //       stock: true,
  //       attrs: [
  //         { id: 1, attr: "Марка", value: "Bosh" },
  //         { id: 2, attr: "Артикул", value: "7736900199RU" },
  //         { id: 3, attr: "Мощность", value: "– 24 кВт" },
  //       ],
  //       img: "/images/product/1.png",
  //       price: { id: 1, price: 14534, discount: 20, name: "", single: true },
  //     },
  //     {
  //       id: 4,
  //       name: "Сплит система BOSCH WBN6000-18H RN S5700 одноконтурный",
  //       slug: "slug4",
  //       stock: true,
  //       attrs: [
  //         { id: 1, attr: "Марка", value: "Bosh" },
  //         { id: 2, attr: "Артикул", value: "7736900199RU" },
  //         { id: 3, attr: "Мощность", value: "– 24 кВт" },
  //       ],
  //       img: "/images/product/1.png",
  //       price: { id: 1, price: 14534, discount: 20, name: "", single: true },
  //     },
  //     {
  //       id: 5,
  //       name: "Сплит система BOSCH WBN6000-18H RN S5700 одноконтурный",
  //       slug: "slug5",
  //       stock: true,
  //       attrs: [
  //         { id: 1, attr: "Марка", value: "Bosh" },
  //         { id: 2, attr: "Артикул", value: "7736900199RU" },
  //         { id: 3, attr: "Мощность", value: "– 24 кВт" },
  //       ],
  //       img: "/images/product/1.png",
  //       price: { id: 1, price: 14534, discount: 20, name: "", single: true },
  //     },
  //     {
  //       id: 6,
  //       name: "Сплит система BOSCH WBN6000-18H RN S5700 одноконтурный",
  //       slug: "slug6",
  //       stock: true,
  //       attrs: [
  //         { id: 1, attr: "Марка", value: "Bosh" },
  //         { id: 2, attr: "Артикул", value: "7736900199RU" },
  //         { id: 3, attr: "Мощность", value: "– 24 кВт" },
  //       ],
  //       img: "/images/product/1.png",
  //       price: { id: 1, price: 14534, discount: 20, name: "", single: true },
  //     },
  //     {
  //       id: 7,
  //       name: "Сплит система BOSCH WBN6000-18H RN S5700 одноконтурный",
  //       slug: "slug7",
  //       stock: true,
  //       attrs: [
  //         { id: 1, attr: "Марка", value: "Bosh" },
  //         { id: 2, attr: "Артикул", value: "7736900199RU" },
  //         { id: 3, attr: "Мощность", value: "– 24 кВт" },
  //       ],
  //       img: "/images/product/1.png",
  //       price: { id: 1, price: 14534, discount: 20, name: "", single: true },
  //     },
  //     {
  //       id: 8,
  //       name: "Сплит система BOSCH WBN6000-18H RN S5700 одноконтурный",
  //       slug: "slug8",
  //       stock: true,
  //       attrs: [
  //         { id: 1, attr: "Марка", value: "Bosh" },
  //         { id: 2, attr: "Артикул", value: "7736900199RU" },
  //         { id: 3, attr: "Мощность", value: "– 24 кВт" },
  //       ],
  //       img: "/images/product/1.png",
  //       price: { id: 1, price: 14534, discount: 20, name: "", single: true },
  //     },
  //     {
  //       id: 9,
  //       name: "Сплит система BOSCH WBN6000-18H RN S5700 одноконтурный",
  //       slug: "slug9",
  //       stock: true,
  //       attrs: [
  //         { id: 1, attr: "Марка", value: "Bosh" },
  //         { id: 2, attr: "Артикул", value: "7736900199RU" },
  //         { id: 3, attr: "Мощность", value: "– 24 кВт" },
  //       ],
  //       img: "/images/product/1.png",
  //       price: { id: 1, price: 14534, discount: 20, name: "", single: true },
  //     },
  //     {
  //       id: 10,
  //       name: "Сплит система BOSCH WBN6000-18H RN S5700 одноконтурный",
  //       slug: "slug10",
  //       stock: true,
  //       attrs: [
  //         { id: 1, attr: "Марка", value: "Bosh" },
  //         { id: 2, attr: "Артикул", value: "7736900199RU" },
  //         { id: 3, attr: "Мощность", value: "– 24 кВт" },
  //       ],
  //       img: "/images/product/1.png",
  //       price: { id: 1, price: 14534, discount: 20, name: "", single: true },
  //     },
  //     {
  //       id: 11,
  //       name: "Сплит система BOSCH WBN6000-18H RN S5700 одноконтурный",
  //       slug: "slug11",
  //       stock: true,
  //       attrs: [
  //         { id: 1, attr: "Марка", value: "Bosh" },
  //         { id: 2, attr: "Артикул", value: "7736900199RU" },
  //         { id: 3, attr: "Мощность", value: "– 24 кВт" },
  //       ],
  //       img: "/images/product/1.png",
  //       price: { id: 1, price: 14534, discount: 20, name: "", single: true },
  //     },
  //     {
  //       id: 12,
  //       name: "Сплит система BOSCH WBN6000-18H RN S5700 одноконтурный",
  //       slug: "slug12",
  //       stock: true,
  //       attrs: [
  //         { id: 1, attr: "Марка", value: "Bosh" },
  //         { id: 2, attr: "Артикул", value: "7736900199RU" },
  //         { id: 3, attr: "Мощность", value: "– 24 кВт" },
  //       ],
  //       img: "/images/product/1.png",
  //       price: { id: 1, price: 14534, discount: 20, name: "", single: true },
  //     },
  //   ],
  // };
};
