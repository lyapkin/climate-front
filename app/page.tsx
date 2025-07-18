import { generateMetadataUtil } from "@/src/app/utils";
import { Home } from "@/src/page/home";

import { getPageApi } from "@/src/shared/api";
import { Breadcrumbs } from "@/src/widgets/breadcrumbs";
import { Metadata, ResolvingMetadata } from "next";

export default function HomePage() {
  return (
    <>
      <Breadcrumbs home />
      <Home />
    </>
  );
}

export const generateMetadata = async (
  {
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const searchParamsData = await searchParams;
  const page = await getPageApi("home");

  return generateMetadataUtil(parent, "/", page.metadata, searchParamsData);
};
