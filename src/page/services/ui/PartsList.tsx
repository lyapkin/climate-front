"use client";
import { ChangeEvent, useState } from "react";
import { ServicePart } from "../model";
import s from "./styles.module.css";

const PartsList = ({ data }: PartsListProps) => {
  const [resultPrice, setResultPrice] = useState(0);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setResultPrice((prev) => {
      if (e.target.checked) {
        return prev + Number(e.target.value);
      }
      return prev - +Number(e.target.value);
    });
  };

  return (
    <>
      <div className={s.content__partsList}>
        {data.map((item) => {
          return (
            <label key={item.id} className={s.content__partsItem}>
              <input
                type="checkbox"
                name="price"
                value={item.price}
                onChange={handleCheck}
              />
              <span className={s.partsItem__name}>{item.name}</span>
              <span className={s.partsItem__price}>{item.price} ₽</span>
            </label>
          );
        })}
      </div>
      <div className={s.content__partsSum}>
        <span className={s.partsSum__text}>Итоговая стоимость</span>
        <span className={s.partsSum__sum}>{resultPrice} ₽</span>
      </div>
    </>
  );
};

interface PartsListProps {
  data: ServicePart[];
}

export default PartsList;
