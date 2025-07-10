"use client";
import s from "./styles.module.css";
import cn from "classnames";
import { useEffect } from "react";
import { Rubric } from "../model";
import { useRubrics } from "../providers";
import RubricButton from "./RubricButton";

const RubricsList = ({ rubrics }: RubricsListProps) => {
  const { currentRubric, handleChange, all } = useRubrics();

  useEffect(() => {
    if (!all) {
      handleChange(rubrics[0].id);
    }
  }, [all, rubrics, handleChange]);

  const content = rubrics.map((item) => {
    return (
      <li
        className={cn(s.rubrics__item, {
          [s.rubrics__item_active]: currentRubric === item.id,
        })}
        key={item.id}
      >
        <RubricButton type={item} handleChange={handleChange} />
      </li>
    );
  });

  return (
    <ul className={s.rubrics}>
      {all && (
        <li
          className={cn(s.rubrics__item, {
            [s.rubrics__item_active]: currentRubric === null,
          })}
        >
          <RubricButton
            type={{ id: null, name: "Все" }}
            handleChange={handleChange}
          />
        </li>
      )}
      {content}
    </ul>
  );
};

interface RubricsListProps {
  rubrics: Rubric[];
}

export default RubricsList;
