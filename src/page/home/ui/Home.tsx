import { Hero } from "./Hero";
import { getPageApi } from "@/src/shared/api";
import { PriceCalculation } from "./PriceCalculation";
import { CatalogSection } from "./CatalogSection";
import { Logos } from "./Logos";
import { ReviewSection } from "@/src/widgets/review";
import About from "./About/About";
import { Promo } from "@/src/widgets/promo";
import { Contact } from "@/src/widgets/consultation";
import { BlogSection } from "@/src/widgets/blog";
import { Suspense } from "react";

const Home = async () => {
  const page = await getPageApi("home");
  return (
    <>
      <main>
        <Hero title={page.title} />
        <PriceCalculation />
        <CatalogSection />
        <Logos />
        <ReviewSection />
        <div className="bluebg">
          <About />
          <Suspense>
            <Promo />
          </Suspense>
        </div>
      </main>
      <Contact />
      <BlogSection />
    </>
  );
};

export default Home;
