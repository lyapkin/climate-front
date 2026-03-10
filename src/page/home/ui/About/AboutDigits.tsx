import s from "../styles.module.css";

const AboutDigits = () => {
  return (
    <div className={s.about__digits}>
      {data.map((item, i) => {
        return (
          <div key={i} className={s.digits__bullet}>
            <div className={s.digits__digit}>{item.digit}</div>
            <div className={s.digits__sub}>{item.sub}</div>
            <div className={s.digits__text}>{item.text}</div>
          </div>
        );
      })}
    </div>
  );
};

const data = [
  {
    digit: "2000",
    sub: "кондиционеров запущено в эксплуатацию",
    text: "Смонтировали и запустили в эксплуатацию более 2000 систем кондиционирования.",
  },
  {
    digit: "10 лет",
    sub: "опыта",
    text: "Беремся за проекты, от которых другие отказываются: научились решать задачи любой сложности.",
  },
];

export default AboutDigits;
