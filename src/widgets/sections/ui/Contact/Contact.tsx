import { GetConsultation } from "./Consultation";
import s from "./styles.module.css";
import cn from "classnames";

const Contact = () => {
  return (
    <section className={cn(s.contactSection, "section")}>
      <div className="container">
        <div className={cn(s.contact)}>
          <h2 className={cn(s.contact__title, "section-title")}>
            Вам нужен надежный установщик кондиционеров для вашего дома?
          </h2>
          <p className={s.contact__subtitle}>
            Оставьте заявку и мы сформируем для вас лучшее предложение{" "}
            <b>в течение 20 минут</b>
          </p>
          <GetConsultation className={s.contact__form} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
