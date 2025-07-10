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
    digit: "233 640",
    sub: "спроектированно систем ижс",
    text: "Реализованного котельного и отопительного оборудования для теплоснабжения, водоснабжения и канализации",
  },
  {
    digit: "233 640",
    sub: "спроектированно систем ижс",
    text: "Реализованного котельного и отопительного оборудования для теплоснабжения, водоснабжения и канализации",
  },
  {
    digit: "233 640",
    sub: "спроектированно систем ижс",
    text: "Реализованного котельного и отопительного оборудования для теплоснабжения, водоснабжения и канализации",
  },
];

export default AboutDigits;
