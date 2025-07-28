"use client";
import { Button } from "@/src/shared/ui";
import { HTMLAttributes, useState } from "react";
import { Popup } from "@/src/shared/components/client";
import { GetConsultation } from "@/src/features/consultation";
import s from "./styles.module.css";

const GetConsultationButton = ({ className }: HTMLAttributes<HTMLElement>) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button className={className} onClick={() => setOpen(true)}>
        Заказать консультацию
      </Button>
      <Popup open={open} close={() => setOpen(false)}>
        <div className={s.consultationPopup}>
          <p className={s.consultation__title}>
            Не можете подобрать необходимое для вас оборудование?
          </p>
          <p className={s.consultation__subtitle}>
            Оставьте свои контакты и мы свяжемся с вами в течение 10 минут.
          </p>
          <GetConsultation cleanUp={() => setOpen(false)} />
        </div>
      </Popup>
    </>
  );
};

export default GetConsultationButton;
