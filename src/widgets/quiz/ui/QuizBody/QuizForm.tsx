import { GetConsultation } from "@/src/features/consultation";
import { Answer } from "../../models/Answer";
import s from "./styles.module.css";

const QuizForm = ({ answers }: Props) => {
  const addOn = answers.reduce((res, item) => {
    return res + `${item.name}: ${item.value}\n`;
  }, "Квиз\n\n");

  return (
    <div className={s.quiz__body}>
      <div className={s.quiz__form}>
        <p className={s.quiz__title}>
          Оставьте контактные данные для получения рассчета
        </p>
        <GetConsultation addOn={addOn} btnText="Заказать рассчет" />
      </div>
    </div>
  );
};

interface Props {
  answers: Answer[];
}

export default QuizForm;
