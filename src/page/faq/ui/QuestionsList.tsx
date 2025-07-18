"use client";
import s from "./styles.module.css";
import QuestionItem from "./QuestionItem";
import { Faq } from "../types";
import { useRubrics } from "@/src/features/rubric";

const QuestionsList = ({ faqs }: QuestionsListProps) => {
  const { currentRubric } = useRubrics();

  const result =
    currentRubric === null
      ? faqs
      : faqs.filter((item) => item.rubrics.includes(currentRubric));

  const limit = Math.ceil(result.length / 2);

  const content1 = result.slice(0, limit).map((item) => {
    return <QuestionItem key={item.id} faq={item} />;
  });

  const content2 = result.slice(limit).map((item) => {
    return <QuestionItem key={item.id} faq={item} />;
  });
  return (
    <div className={s.faq__questions}>
      <ul className={s.questions}>{content1}</ul>
      <ul className={s.questions}>{content2}</ul>
    </div>
  );
};

interface QuestionsListProps {
  faqs: Faq[];
}

export default QuestionsList;
