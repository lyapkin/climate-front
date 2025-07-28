import { General, getPolicyApi } from "@/src/page/general";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";

const Agreement = async () => {
  const policy = await getPolicyApi("agreement");

  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Пользовательское соглашение</BreadcrumbsItem>
      </Breadcrumbs>
      <General general={policy} />
    </>
  );
};

export default Agreement;

export const metadata = {
  alternates: {
    canonical: "agreement/",
  },
  robots: { index: false, follow: true },
};
