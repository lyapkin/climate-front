import s from "./styles.module.css";
import cn from "classnames";
import { getPageApi } from "@/src/shared/api";
import { getBlogRubricsApi } from "@/src/widgets/blog";
import { Rubrics } from "@/src/features/rubric";
import { Suspense } from "react";
import { Contact } from "@/src/widgets/sections";
import { BlogContent } from "./BlogContent";
import { BlogPagination } from "./BlogPagination";

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
              type="params"
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
