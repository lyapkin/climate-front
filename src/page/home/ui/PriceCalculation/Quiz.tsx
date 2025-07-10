"use client";
import React, { useState } from "react";
import s from "../styles.module.css";
import cn from "classnames";
import Image from "next/image";
import { Button } from "@/src/shared/ui";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className={s.priceCalculation__quiz}>
      <p className={s.quiz__title}>{data[current].title}</p>
      <div
        className={s.quiz__progress}
        style={
          {
            "--progress": `${100 - ((current + 1) / data.length) * 100}%`,
          } as React.CSSProperties
        }
      >
        <span>{`${current + 1} из ${data.length}`}</span>
      </div>
      <div className={s.quiz__optionsList}>
        {data[current].options.map((item) => {
          return (
            <div className={s.quiz__option} key={`${current}-${item.id}`}>
              <div className={s.quiz__optionImg}>
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className={s.quiz__optionText}>{item.name}</p>
            </div>
          );
        })}
      </div>
      <div className={s.quiz__buttons}>
        <Button
          className={cn(s.quiz__button, s.quiz__back)}
          onClick={() => setCurrent((prev) => prev - 1)}
          disabled={current === 0}
        >
          Назад
        </Button>
        <Button
          className={cn(s.quiz__button, s.quiz__forward)}
          onClick={() => setCurrent((prev) => prev + 1)}
          disabled={current === data.length - 1}
        >
          Далее
        </Button>
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    title: "Где необходимо установить приточную вентиляцию или кондиционеры ?",
    options: [
      {
        id: 1,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 2,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 3,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 4,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 5,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 6,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Где необходимо установить приточную вентиляцию или кондиционеры ?",
    options: [
      {
        id: 1,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 2,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 3,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 4,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 5,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 6,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Где необходимо установить приточную вентиляцию или кондиционеры ?",
    options: [
      {
        id: 1,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 2,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 3,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 4,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 5,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 6,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Где необходимо установить приточную вентиляцию или кондиционеры ?",
    options: [
      {
        id: 1,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 2,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 3,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 4,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 5,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
      {
        id: 6,
        name: "Переносной",
        img: "/images/home/calculation/quiz/1.jpg",
      },
    ],
  },
];

export default Quiz;
