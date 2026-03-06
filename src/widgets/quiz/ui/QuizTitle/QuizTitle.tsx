import React from "react";
import s from "./styles.module.css";

const QuizTitle = React.memo(({ question }: Props) => {
  return <p className={s.quiz__title}>{question}</p>;
});

interface Props {
  question: string;
}

QuizTitle.displayName = "QuizTitle";

export default QuizTitle;
