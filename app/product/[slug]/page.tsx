import { generateMetadataUtil } from "@/src/app/utils";
import { getProductDetailApi } from "@/src/entities/product";
import { Product } from "@/src/page/product";
import { Breadcrumbs, BreadcrumbsItem } from "@/src/widgets/breadcrumbs";
import { Metadata, ResolvingMetadata } from "next";

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
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/catalog/`,
      },
      ...product.categories.map((item, i) => {
        return {
          "@type": "ListItem",
          position: i + 2,
          name: item.name,
          item: `${process.env.NEXT_PUBLIC_SITE_URL}/catalog/${item.slug}/`,
        };
      }),
      {
        "@type": "ListItem",
        position: product.categories.length + 2,
        name: product.name,
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/product/${slug}/#`,
      },
    ],
  };
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem link="/catalog/">Каталог</BreadcrumbsItem>
        {product.categories.map((item) => {
          return (
            <BreadcrumbsItem key={item.id} link={`/catalog/${item.slug}/`}>
              {item.name}
            </BreadcrumbsItem>
          );
        })}
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

export const generateMetadata = async (
  {
    params,
    searchParams,
  }: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { slug } = await params;
  const searchParamsData = await searchParams;
  const page = await getProductDetailApi(slug);

  const meta = generateMetadataUtil(
    parent,
    `catalog/${slug}/`,
    page.metadata,
    searchParamsData
  );

  return {
    ...meta,
    openGraph: {
      type: "website",
      images: [
        {
          url: page.imgs[0].url,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [
        {
          url: page.imgs[0].url,
          width: 1200,
          height: 630,
          // type: "image/webp",
        },
      ],
    },
  };
};
