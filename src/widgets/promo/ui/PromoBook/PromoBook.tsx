"use client";
import { HTMLAttributes, useState } from "react";
import s from "./styles.module.css";
import { Button } from "@/src/shared/ui";
import PromoForm from "./PromoForm";
import { Popup } from "@/src/shared/components/client";

const PromoBook = ({ className }: HTMLAttributes<HTMLElement>) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={className}>
        <Button className={s.cta} onClick={() => setOpen(true)}>
          Забронировать
        </Button>
      </div>
      <Popup open={open} close={() => setOpen(false)}>
        <PromoForm />
      </Popup>
    </>
  );
};

export default PromoBook;
