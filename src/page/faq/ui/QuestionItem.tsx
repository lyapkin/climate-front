import s from "./styles.module.css";
import { Faq } from "../types";
import { Expender } from "@/src/shared/components";
import { ArrowDownIcon } from "@/src/shared/icons";
import "@/src/shared/styles/ck.css";
import cn from "classnames";

const QuestionItem = ({ faq }: QuestionItemProps) => {
  return (
    <Expender
      header={<span className={s.item__title}>{faq.question}</span>}
      indicator={<ArrowDownIcon />}
      isOpenDefault={false}
      className={s.item}
      headerClassName={s.item__header}
    >
      <div
        className={cn(s.item__content, "ck")}
        dangerouslySetInnerHTML={{ __html: faq.answer }}
      />
    </Expender>
  );
};

interface QuestionItemProps {
  faq: Faq;
}

export default QuestionItem;
