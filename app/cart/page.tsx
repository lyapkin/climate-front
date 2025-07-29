import { Cart } from "@/src/page/cart";
import { Breadcrumbs, BreadcrumbsItem } from "@/src/widgets/breadcrumbs";

const CartPage = () => {
  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Корзина",
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/cart/`,
      },
    ],
  };
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Корзина</BreadcrumbsItem>
      </Breadcrumbs>
      <Cart />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
};

export default CartPage;

export const metadata = {
  title: "Климов Климат | Корзина",
  description: "Корзина",
  alternates: {
    canonical: "cart/",
  },
  robots: { index: false, follow: true },
};
