import { Contact } from "@/src/widgets";
import s from "./styles.module.css";
import cn from "classnames";
import { getPageApi } from "@/src/shared/api";
import {
  BlogContent,
  BlogPagination,
  getBlogRubricsApi,
} from "@/src/widgets/blog";
import { Rubrics } from "@/src/features/rubric";
import { Suspense } from "react";

const Blog = async () => {
  const data = await getPageApi("blog");
  return (
    <>
      <div className="page hero">
        <div className="container">
          <main className={s.blog}>
            <h1 className={cn(s.blog__title, "page-title")}>{data.title}</h1>
            <Rubrics
              getRubricApi={getBlogRubricsApi}
              className={s.blog__rubrics}
            >
              <Suspense>
                <BlogContent className={s.blog__content} />
              </Suspense>
            </Rubrics>
            <Suspense>
              <BlogPagination className={s.blog__pagination} />
            </Suspense>
          </main>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Blog;
