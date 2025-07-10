import { getProductDetailApi } from "@/src/entities/product";
import { Product } from "@/src/page/product";
import { Breadcrumbs, BreadcrumbsItem } from "@/src/widgets";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductDetailApi(slug);

  const offers = {
    "@type": "Offer",
    price: product.price,
    priceCurrency: "RUB",
  };
  const image = product.imgs.length > 0 ? product.imgs[0].url : undefined;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image,
    offers,
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Каталог",
        item: `${process.env.BACK_URL}/catalog/`,
      },
      // {
      //   "@type": "ListItem",
      //   position: 2,
      //   name: product.,
      //   item: `${process.env.BACK_URL}/catalog/${product.categories[0].slug}/`,
      // },
      {
        "@type": "ListItem",
        position: 2,
        name: product.name,
        item: `${process.env.BACK_URL}/product/${slug}/`,
      },
    ],
  };
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem link="/catalog/">Каталог</BreadcrumbsItem>
        <BreadcrumbsItem>{product.name}</BreadcrumbsItem>
      </Breadcrumbs>
      <Product product={product} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
};

export default ProductPage;
