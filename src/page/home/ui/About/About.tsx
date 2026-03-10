import s from "../styles.module.css";
import cn from "classnames";
import AboutDigits from "./AboutDigits";

const About = () => {
  return (
    <section className={cn(s.aboutSection)}>
      <div className="container">
        <div className={cn(s.about)}>
          <h2 className={cn(s.about__title, "section-title")}>
            Более 10 лет помогаем
            <br />
            нашим клиентам
          </h2>
          <div className={s.about__text}>
            <h3>С монтажем климатических систем</h3>
            <p>
              Меня зовут Сергей Климов, более 10 лет мы со своей командой
              помогаем сделать свои дома и офисы более комфортным, правильно
              подбираем и надежно монтируем кондиционеры
            </p>
            <h3>Осуществляем полный цикл работ</h3>
            <ul>
              <li>- Консультация и подбор подходящей модели</li>
              <li>- Продажа с оформлением всех необходимых документов</li>
              <li>- Профессиональный монтаж с гарантией до 5 лет</li>
              <li>- Сервисное обслуживание и помощь при необходимости</li>
            </ul>
            <p>
              Мы найдём красивое инженерное решение для любой задачи. Просто
              расскажите нам о ней.
            </p>
          </div>
          <AboutDigits />
        </div>
      </div>
    </section>
  );
};

export default About;
