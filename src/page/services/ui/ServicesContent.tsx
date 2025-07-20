"use client";
import { useState } from "react";
import { Service } from "../model";
import ServiceItem from "./ServiceItem";
import s from "./styles.module.css";
import OptionsList from "./OptionsList";
import Image from "next/image";

const ServicesContent = ({ data }: ServicesContentProps) => {
  const [currentService, setCurrentService] = useState(0);

  return (
    <div className={s.content}>
      <div className={s.content__servicesList}>
        {data.map((item, i) => {
          return (
            <ServiceItem
              key={item.id}
              service={item}
              active={currentService === i}
              onClick={() => setCurrentService(i)}
            />
          );
        })}
      </div>
      <div className={s.content__card}>
        <div className={s.card__img}>
          <Image
            src={data[currentService].img}
            alt={data[currentService].name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className={s.card__text}
          dangerouslySetInnerHTML={{
            __html: data[currentService].description,
          }}
        />
      </div>
      <OptionsList
        key={data[currentService].id}
        data={data[currentService].options}
      />
    </div>
  );
};

interface ServicesContentProps {
  data: Service[];
}

export default ServicesContent;
