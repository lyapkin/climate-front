"use client";
import { HTMLAttributes, useState } from "react";
import s from "./styles.module.css";
import { Button } from "@/src/shared/ui";
import PromoForm from "./PromoForm";
import { Popup } from "@/src/shared/components/client";

const PromoBook = ({ promoId, className }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={className}>
        <Button className={s.cta} onClick={() => setOpen(true)}>
          Забронировать
        </Button>
      </div>
      <Popup open={open} close={() => setOpen(false)}>
        <PromoForm promo={promoId} cleanUp={() => setOpen(false)} />
      </Popup>
    </>
  );
};

interface Props extends HTMLAttributes<HTMLElement> {
  promoId: number;
}

export default PromoBook;
