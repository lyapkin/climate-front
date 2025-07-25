import s from "./styles.module.css";
import GetConsultationButton from "./GetConsultationButton";

const ContactPlugin = () => {
  return (
    <div className={s.consultation}>
      <p className={s.consultation__title}>
        Не можете подобрать необходимое для вас оборудование?
      </p>
      <p className={s.consultation__subtitle}>
        Оставьте свои контакты и мы свяжемся с вами в течение 20 минут.
      </p>
      <GetConsultationButton className={s.consultation__button} />
    </div>
  );
};

export default ContactPlugin;
