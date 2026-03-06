import { Step } from "@/src/widgets/quiz/models/Step";

export const quizSteps: Step[] = [
  {
    step: 1,
    type: "choice",
    name: "Место установки",
    question: "Где необходимо установить кондиционер?",
    options: [
      {
        id: 1,
        name: "Квартира",
        img: "/images/home/calculation/quiz/1.webp",
      },
      {
        id: 2,
        name: "Частный дом",
        img: "/images/home/calculation/quiz/2.webp",
      },
      {
        id: 3,
        name: "Офис",
        img: "/images/home/calculation/quiz/3.webp",
      },
      {
        id: 4,
        name: "Коммерческое помещение",
        img: "/images/home/calculation/quiz/4.webp",
      },
      {
        id: 5,
        name: "Серверная",
        img: "/images/home/calculation/quiz/5.webp",
      },
      {
        id: 6,
        name: "Другое",
        img: "",
      },
    ],
  },
  {
    step: 2,
    type: "counter",
    name: "Площадь помещения (м\u00B2)",
    question: "Укажите площадь вашего помещения?",
    unit: "м\u00B2",
  },
  {
    step: 3,
    type: "counter",
    name: "Расстояние от внутреннего до наружного блока (м)",
    question: "Укажите расстояние от внутреннего до наружного блока?",
    unit: "м",
  },
  {
    step: 4,
    type: "choice",
    name: "Вид внутреннего блока",
    question: "Укажите вид внутреннего блока?",
    options: [
      {
        id: 1,
        name: "Настенный",
        img: "/images/home/calculation/quiz/7.webp",
      },
      {
        id: 2,
        name: "Потолочный",
        img: "/images/home/calculation/quiz/8.webp",
      },
      {
        id: 3,
        name: "Кассетный",
        img: "/images/home/calculation/quiz/9.webp",
      },
      {
        id: 4,
        name: "Канальный",
        img: "/images/home/calculation/quiz/10.webp",
      },
      {
        id: 5,
        name: "Другое",
        img: "/images/home/calculation/quiz/11.webp",
      },
    ],
  },
  {
    step: 5,
    type: "choice",
    name: "Защита для кондиционера",
    question: "Выберите защиту для кондиционера",
    options: [
      {
        id: 1,
        name: "Козырек",
        img: "/images/home/calculation/quiz/12.webp",
      },
      {
        id: 2,
        name: "Решетка",
        img: "/images/home/calculation/quiz/13.webp",
      },
      {
        id: 3,
        name: "Нет, не нужно",
        img: "/images/home/calculation/quiz/14.webp",
      },
    ],
  },
];
