import React from "react";
import s from "./styles.module.css";

const Progress = React.memo(({ stepIndex, length }: Props) => {
  return (
    <div
      className={s.quiz__progress}
      style={
        {
          "--progress": `${100 - (stepIndex / length) * 100}%`,
        } as React.CSSProperties
      }
    >
      <span>{`${stepIndex + 1} из ${length + 1}`}</span>
    </div>
  );
});

interface Props {
  stepIndex: number;
  length: number;
}

Progress.displayName = "Progress";

export default Progress;
