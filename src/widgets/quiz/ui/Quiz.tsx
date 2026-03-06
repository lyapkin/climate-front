"use client";
import s from "./styles.module.css";
import QuizTitle from "./QuizTitle/QuizTitle";
import type { Step } from "../models/Step";
import Progress from "./Progress/Progress";
import QuizBody from "./QuizBody/QuizBody";
import QuizControls from "./QuizControls/QuizControls";
import { useCallback, useState } from "react";
import { Answer } from "../models/Answer";
import QuizForm from "./QuizBody/QuizForm";

const Quiz = ({ steps }: Props) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(
    steps.map((item) => ({ name: item.name, value: null })),
  );

  const stepForward = useCallback(() => setStepIndex((prev) => prev + 1), []);
  const stepBack = useCallback(() => setStepIndex((prev) => prev - 1), []);
  const setAnswer = useCallback(
    (answer: string | number) =>
      setAnswers((prev) =>
        prev.map((item, i) =>
          i === stepIndex ? { ...item, value: answer } : { ...item },
        ),
      ),
    [stepIndex],
  );

  return (
    <div className={s.quiz}>
      <QuizTitle
        question={
          stepIndex !== steps.length
            ? steps[stepIndex].question
            : "Получите рассчет стоимость монтажа кондиционера"
        }
      />
      <Progress stepIndex={stepIndex} length={steps.length} />
      {stepIndex !== steps.length ? (
        <QuizBody
          step={steps[stepIndex]}
          answerValue={answers[stepIndex].value}
          setAnswer={setAnswer}
        />
      ) : (
        <QuizForm answers={answers} />
      )}
      <QuizControls
        isFirstStep={stepIndex === 0}
        isLastStep={stepIndex === steps.length}
        isAnswerSet={
          stepIndex !== steps.length ? !!answers[stepIndex].value : false
        }
        stepForward={stepForward}
        stepBack={stepBack}
      />
    </div>
  );
};

interface Props {
  steps: Step[];
}

export default Quiz;
