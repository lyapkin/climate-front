import s from "../styles.module.css";
import cn from "classnames";
import Info from "./Info";
import { Quiz } from "@/src/widgets/quiz";
import { quizSteps } from "./constants/quiz";

const PriceCalculation = () => {
  return (
    <section
      className={cn(s.priceCalculationSection, "section")}
      id="calculation"
    >
      <div className="container">
        <div className={cn(s.priceCalculation, "section-flex")}>
          <h2 className={cn(s.priceCalculation__title, "section-title")}>
            Ответьте на 6 простых вопросов и{" "}
            <b>узнайте стоимость кондиционирования для вашего объекта</b>
          </h2>
          <div className={s.priceCalculation__content}>
            <Quiz steps={quizSteps} />
            <Info />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculation;
