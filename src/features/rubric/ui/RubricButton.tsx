import s from "./styles.module.css";
import { Rubric, handleChangeFunc } from "../model";

const RubricButton = ({ type, handleChange }: RubricButtonProps) => {
  return (
    <button className={s.rubricButton} onClick={() => handleChange(type.id)}>
      {type.name}
    </button>
  );
};

interface RubricButtonProps {
  type: Rubric;
  handleChange: handleChangeFunc;
}

export default RubricButton;
