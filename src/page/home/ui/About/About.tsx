import s from "../styles.module.css";
import cn from "classnames";
import AboutDigits from "./AboutDigits";

const About = () => {
  return (
    <section className={cn(s.aboutSection)}>
      <div className="container">
        <div className={cn(s.about)}>
          <h2 className={cn(s.about__title, "section-title")}>
            23 года помогаем
            <br />
            нашим клиентам
            <span>c монтажем инженерных систем</span>
          </h2>
          <div className={s.about__text}>
            <p>
              За 23 года работы в сфере комплексного монтажа инженерных систем
              мы получили опыт, который помогает предоставлять услуги, качество
              которых превышает их стоимость.
            </p>
            <p>
              ООО “Теплоград-Каменск” успешно осуществляет свою деятельность на
              рынке уже более 20 лет. За нашими плечами путь от малого торгового
              предприятия до крупной оптовой и розничной компании, которая на
              сегодняшний день является ведущим поставщиком продукции для
              водоснабжения и отопления в Уральском и Западносибирском
              федеральных округах.
            </p>
          </div>
          <AboutDigits />
        </div>
      </div>
    </section>
  );
};

export default About;
