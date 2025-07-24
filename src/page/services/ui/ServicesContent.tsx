"use client";
import React, { useState } from "react";
import { Service } from "../model";
import ServiceItem from "./ServiceItem";
import s from "./styles.module.css";
import OptionsList from "./OptionsList";
import Image from "next/image";

const ServicesContent = ({ data }: ServicesContentProps) => {
  const [currentService, setCurrentService] = useState(0);
  // const [scrolled, setScrolled] = useState(0);

  // const ref = useRef<HTMLDivElement>(null);
  // const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
  //   if (e.target instanceof Element) {
  //     const scrolled = e.target.scrollLeft;
  //     setScrolled(scrolled);
  //   }
  // };
  // const handleScrollLeft = () => {
  //   if (ref && ref.current) {
  //     ref.current.scrollLeft = ref.current.scrollLeft - 100;
  //   }
  // };
  // const handleScrollRight = () => {
  //   if (ref && ref.current) {
  //     ref.current.scrollLeft = ref.current.scrollLeft + 100;
  //   }
  // };
  return (
    <div className={s.content}>
      {/* {scrolled !== 0 && (
        <button
          className={s.servicesList__leftButton}
          onClick={handleScrollLeft}
        ></button>
      )}
      {scrolled + ref.current?.parentElement?.offsetWidth ===
        ref.current?.offsetWidth && (
        <button
          className={s.servicesList__rightButton}
          onClick={handleScrollRight}
        ></button>
      )} */}
      <div
        className={s.content__servicesList}
        // ref={ref}
        // onScroll={handleScroll}
      >
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
