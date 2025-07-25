"use client";
import { Popup } from "@/src/shared/components/client";
import Image from "next/image";
import { useState } from "react";
import s from "./styles.module.css";

const ProductPicture = ({ url, alt }: { url: string; alt: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Image
        src={url}
        fill
        alt={alt}
        objectFit="contain"
        onClick={() => setOpen(true)}
      />
      <Popup open={open} close={() => setOpen(false)}>
        <div className={s.popupImage}>
          <Image
            src={url}
            fill
            alt={alt}
            objectFit="contain"
            onClick={() => setOpen(true)}
          />
        </div>
      </Popup>
    </>
  );
};

export default ProductPicture;
