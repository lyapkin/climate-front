"use client";
import React, { useState } from "react";
import { Service } from "../model";
import s from "./styles.module.css";
import Image from "next/image";
import Options from "./Options/Options";
import Btn from "./Btn/Btn";
import { Scrollable } from "@/src/shared/ui/scrollable";

const ServicesContent = ({ data }: ServicesContentProps) => {
  const [currentService, setCurrentService] = useState(0);
  console.log(data);

  return (
    <div className={s.content}>
      <Scrollable orientation="horizontal" className={s.content__services}>
        <div className={s.content__servicesList}>
          {data.map((item, i) => {
            return (
              <Btn
                key={item.id}
                active={currentService === i}
                onClick={() => setCurrentService(i)}
              >
                {item.name}
              </Btn>
            );
          })}
        </div>
      </Scrollable>
      <div className={s.content__card}>
        <div className={s.card__img}>
          <Image
            src={"/images/services/1.webp"}
            alt={""}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={s.card__text}>
          Мы найдём качественное инженерное решение для любой задачи. Просто
          расскажите нам о ней.
        </div>
      </div>
      {data[currentService].options.length > 0 && (
        <Options
          key={data[currentService].id}
          data={data[currentService].options}
        />
      )}
    </div>
  );
};

interface ServicesContentProps {
  data: Service[];
}

export default ServicesContent;
