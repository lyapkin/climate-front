import s from "./styles.module.css";
import Questions from "./Questions";
import { Suspense } from "react";
import QuestionsListSkeleton from "./QuestionsListSkeleton";
// import { getFAQCategoriesApi } from "../api";
import cn from "classnames";
import { getPageApi } from "@/src/shared/api";
import { Contact } from "@/src/widgets";

const Faq = async () => {
  const page = await getPageApi("faq");
  return (
    <>
      <div className="page hero">
        <div className="container">
          <main className={s.faq}>
            <h1 className={cn(s.faq__title, "page-title")}>{page.title}</h1>
            {/* <FilterBy
              getFilterApi={getFAQCategoriesApi}
              className={s.faq__filters}
            > */}
            <Suspense fallback={<QuestionsListSkeleton />}>
              <Questions />
            </Suspense>
            {/* </FilterBy> */}
          </main>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Faq;
