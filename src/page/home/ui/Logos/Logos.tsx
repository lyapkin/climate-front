import Image from "next/image";
import s from "../styles.module.css";
import cn from "classnames";
import LogosContent from "./LogosContent";

const Logos = () => {
  const content = data.map((item, i) => {
    return (
      <div className={s.logos__pictureWrapper} key={i}>
        <Image
          src={item.url}
          alt={item.alt}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    );
  });
  return (
    <section className={cn(s.logosSection, "section")}>
      <div className="container">
        <div className={s.logos}>
          <h2 className={cn(s.logos__title, "section-title")}>
            Работаем только с проверенными годами производителями
            <br /> систем кондиционирования зарекомендовавших себя качеством
          </h2>
          <LogosContent content={content} />
        </div>
      </div>
    </section>
  );
};

const data = [
  { url: "/images/home/logos/1.png", alt: "AirTS" },
  // { url: "/images/home/logos/2.jpg", alt: "Tosot" },
  { url: "/images/home/logos/3.jpg", alt: "Морозко" },
  { url: "/images/home/logos/4.jpg", alt: "Viomi" },
  // { url: "/images/home/logos/5.jpg", alt: "Ultima Comfort" },
  { url: "/images/home/logos/6.jpg", alt: "Tion" },
  // { url: "/images/home/logos/7.jpg", alt: "Suzuki" },
  { url: "/images/home/logos/8.png", alt: "Samsung" },
  // { url: "/images/home/logos/9.jpg", alt: "Lessar" },
  { url: "/images/home/logos/10.png", alt: "Fujitsu" },
  { url: "/images/home/logos/11.png", alt: "High Life" },
  { url: "/images/home/logos/12.png", alt: "Ecostar" },
  // { url: "/images/home/logos/13.png", alt: "Ecoclima" },
  // { url: "/images/home/logos/14.png", alt: "Pioneer" },
  { url: "/images/home/logos/15.png", alt: "LG" },
  // { url: "/images/home/logos/16.png", alt: "Kentatsu" },
  // { url: "/images/home/logos/17.png", alt: "Kitano" },
  // { url: "/images/home/logos/18.jpeg", alt: "Euroklimat" },
  { url: "/images/home/logos/19.png", alt: "MDV" },
  { url: "/images/home/logos/20.png", alt: "Gree" },
  { url: "/images/home/logos/21.png", alt: "Haier" },
  { url: "/images/home/logos/22.png", alt: "Just Aircon" },
  { url: "/images/home/logos/23.png", alt: "AUX" },
  { url: "/images/home/logos/24.png", alt: "Dantherm" },
  { url: "/images/home/logos/25.png", alt: "Hitachi" },
  { url: "/images/home/logos/26.png", alt: "TCL" },
  { url: "/images/home/logos/27.png", alt: "Midea" },
  { url: "/images/home/logos/28.png", alt: "Daikin" },
  { url: "/images/home/logos/29.png", alt: "Тепломаш" },
  { url: "/images/home/logos/30.png", alt: "Zilon" },
  { url: "/images/home/logos/31.png", alt: "Toshiba" },
  { url: "/images/home/logos/32.png", alt: "Royal Clima" },
  { url: "/images/home/logos/33.png", alt: "Mitsubishi Heavy" },
  { url: "/images/home/logos/34.png", alt: "Kalashnikov" },
  { url: "/images/home/logos/35.png", alt: "Hisense" },
  { url: "/images/home/logos/36.png", alt: "Funai" },
  { url: "/images/home/logos/37.png", alt: "Energolux" },
  { url: "/images/home/logos/38.png", alt: "Dantex" },
  { url: "/images/home/logos/39.png", alt: "Bosch" },
  { url: "/images/home/logos/40.png", alt: "Zajnussi" },
  { url: "/images/home/logos/41.png", alt: "Vetero" },
  { url: "/images/home/logos/42.png", alt: "Vent Machine" },
  { url: "/images/home/logos/43.png", alt: "Turkov" },
  { url: "/images/home/logos/44.png", alt: "Thermor" },
  { url: "/images/home/logos/45.png", alt: "Systemair" },
  { url: "/images/home/logos/46.png", alt: "Stiebel Eltron" },
  { url: "/images/home/logos/47.png", alt: "Shivaki" },
  { url: "/images/home/logos/48.png", alt: "Remez" },
  { url: "/images/home/logos/49.png", alt: "Philips" },
  { url: "/images/home/logos/50.png", alt: "Panasonic" },
  { url: "/images/home/logos/51.png", alt: "Noirot" },
  { url: "/images/home/logos/52.png", alt: "Nobo" },
  { url: "/images/home/logos/53.png", alt: "Nebux" },
  { url: "/images/home/logos/54.png", alt: "Mitsubishi Electric" },
  { url: "/images/home/logos/55.png", alt: "General" },
  { url: "/images/home/logos/56.png", alt: "Ferrum" },
  { url: "/images/home/logos/57.png", alt: "Electrolux" },
  { url: "/images/home/logos/58.jpg", alt: "Dimplex" },
  { url: "/images/home/logos/59.png", alt: "Danvex" },
  { url: "/images/home/logos/60.png", alt: "Cooper Hunter" },
  { url: "/images/home/logos/61.png", alt: "Casarte" },
  { url: "/images/home/logos/62.png", alt: "Breezart" },
  { url: "/images/home/logos/63.png", alt: "Ballu" },
  { url: "/images/home/logos/64.png", alt: "Ariston" },
  { url: "/images/home/logos/65.png", alt: "Alfacool" },
  { url: "/images/home/logos/66.png", alt: "Airgy" },
];

export default Logos;
