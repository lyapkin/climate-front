import { General, getPolicyApi } from "@/src/page/general";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";

const Privacy = async () => {
  const policy = await getPolicyApi("privacy");

  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Политика конфиденциальности</BreadcrumbsItem>
      </Breadcrumbs>
      <General general={policy} />
    </>
  );
};

export default Privacy;

export const metadata = {
  alternates: {
    canonical: "privacy/",
  },
  robots: { index: false, follow: true },
};
