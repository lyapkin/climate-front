import s from "./styles.module.css";
import { PageContent } from "../types";
import cn from "classnames";
import "@/src/shared/styles/ck.css";
import { Contact } from "@/src/widgets/consultation";

const General = ({ general }: GeneralProps) => {
  return (
    <>
      <div className="page hero">
        <div className="container">
          <main>
            <div className={s.general}>
              <h1 className={cn(s.general__title, "page-title")}>
                {general.name}
              </h1>
              <div
                className={cn(s.general__content, "ck")}
                dangerouslySetInnerHTML={{ __html: general.content }}
              ></div>
            </div>
          </main>
        </div>
      </div>
      <Contact />
    </>
  );
};

export interface GeneralProps {
  general: PageContent;
}

export default General;
