import s from "./styles.module.css";
import cn from "classnames";
import CustomLink from "@/src/shared/ui/CustomLink/CustomLink";
import { Rubrics } from "@/src/features/rubric";
import { getBlogRubricsApi } from "../../api";
import { Suspense } from "react";
import { BlogContent } from "../BlogContent";

const BlogSection = () => {
  return (
    <section className={cn(s.blogSection, "section")}>
      <div className="container">
        <div className={s.blog}>
          <h2 className={cn(s.blog__title, "section-title")}>
            Читайте интересные статьи в нашем блоге и следите за новостями
          </h2>
          <Rubrics getRubricApi={getBlogRubricsApi} className={s.blog__rubrics}>
            <Suspense>
              <BlogContent className={s.blog__content} />
            </Suspense>
          </Rubrics>
          <CustomLink href={"/blog/"} className={s.blog__link}>
            Читать еще новости
          </CustomLink>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
