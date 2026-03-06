import { Button } from "@/src/shared/ui";
import cn from "classnames";
import s from "./styles.module.css";
import React from "react";

const QuizControls = React.memo(
  ({ isFirstStep, isLastStep, isAnswerSet, stepForward, stepBack }: Props) => {
    return (
      <div className={s.quiz__buttons}>
        <Button
          className={cn(s.quiz__button, s.quiz__back)}
          onClick={stepBack}
          disabled={isFirstStep}
        >
          Назад
        </Button>
        <Button
          className={cn(s.quiz__button, s.quiz__forward)}
          onClick={stepForward}
          disabled={isLastStep || !isAnswerSet}
        >
          Далее
        </Button>
      </div>
    );
  },
);

interface Props {
  isFirstStep: boolean;
  isLastStep: boolean;
  isAnswerSet: boolean;
  stepForward: () => void;
  stepBack: () => void;
}

QuizControls.displayName = "QuizControls";

export default QuizControls;
