import React from "react";
import { Answer } from "../../models/Answer";
import { Step } from "../../models/Step";
import QuizCard from "../QuizCard/QuizCard";
import QuizCounter from "../QuizCounter/QuizCounter";
import s from "./styles.module.css";

const QuizBody = React.memo(({ step, answerValue, setAnswer }: Props) => {
  if (step.type === "choice") {
    return (
      <div className={s.quiz__body}>
        <div className={s.quiz__optionsList}>
          {step.options.map((item) => {
            return (
              <QuizCard
                img={item.img}
                name={item.name}
                onClick={setAnswer}
                key={item.id}
                chosen={answerValue === item.name}
              />
            );
          })}
        </div>
      </div>
    );
  }

  if (step.type === "counter") {
    return (
      <div className={s.quiz__body}>
        <div className={s.quiz__counter}>
          <QuizCounter
            value={Number(answerValue) || 0}
            unit={step.unit}
            setAnswer={setAnswer}
          />
        </div>
      </div>
    );
  }
});

interface Props {
  step: Step;
  answerValue: Answer["value"];
  setAnswer: (answer: string | number) => void;
}

QuizBody.displayName = "QuizBody";

export default QuizBody;
