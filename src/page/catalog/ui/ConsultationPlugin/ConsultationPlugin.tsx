import { Button } from "@/src/shared/ui";
import s from "./styles.module.css";

const ConsultationPlugin = () => {
  return (
    <div className={s.consultation}>
      <p className={s.consultation__title}>
        Не можете подобрать необходимое для вас оборудование?
      </p>
      <p className={s.consultation__subtitle}>
        Оставьте свои контакты и мы свяжемся с вами в течение 10 минут.
      </p>
      {/* <GetConsultationPopup /> */}
      <Button className={s.consultation__button}>Заказать консультацию</Button>
    </div>
  );
};

export default ConsultationPlugin;
