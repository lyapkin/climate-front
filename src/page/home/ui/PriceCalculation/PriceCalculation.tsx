import s from "../styles.module.css";
import cn from "classnames";
import Quiz from "./Quiz";
import Info from "./Info";

const PriceCalculation = () => {
  return (
    <section className={cn(s.priceCalculationSection, "section")}>
      <div className="container">
        <div className={cn(s.priceCalculation, "section-flex")}>
          <h2 className={cn(s.priceCalculation__title, "section-title")}>
            Ответьте на 6 простых вопросов и{" "}
            <b>узнайте стоимость кондиционирования для вашего объекта</b>
          </h2>
          <div className={s.priceCalculation__content}>
            <Quiz />
            <Info />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculation;
