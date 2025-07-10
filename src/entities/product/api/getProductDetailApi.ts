import { backFetch } from "@/src/shared/api";
import { ProductDetail } from "../model";
import { notFound, permanentRedirect } from "next/navigation";

export const getProductDetailApi = async (
  slug: string
): Promise<ProductDetail> => {
  const res = await backFetch(`catalog/products/${slug}/`, {
    redirect: "manual",
  });
  if (res.status === 404) {
    notFound();
  }
  if (res.status === 301) {
    permanentRedirect(`/product${res.headers.get("Location")}`);
  }
  return res.json();

  // console.log(slug);
  // return {
  //   id: 4,
  //   name: "Сплит система BOSCH WBN6000-18H RN S5700 одноконтурный",
  //   slug: "slug4",
  //   stock: true,
  //   code: "WV08039SR",
  //   attrs: [
  //     { id: 1, attr: "Марка", value: "Bosh" },
  //     { id: 2, attr: "Артикул", value: "7736900199RU" },
  //     { id: 3, attr: "Мощность", value: "– 24 кВт" },
  //   ],
  //   imgs: [
  //     { id: 1, url: "/images/product/1.png" },
  //     { id: 2, url: "/images/product/1.png" },
  //     { id: 3, url: "/images/product/1.png" },
  //     { id: 4, url: "/images/product/1.png" },
  //   ],
  //   docs: [
  //     { id: 1, url: "#", name: "Сертификат" },
  //     { id: 2, url: "#", name: "Сертификат" },
  //   ],
  //   prices: [{ id: 1, price: 14534, discount: 20, name: "" }],
  //   description: `<p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.</p>
  //                     <p>При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</p>
  //                     <p>По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст.</p>`,
  // };
};
