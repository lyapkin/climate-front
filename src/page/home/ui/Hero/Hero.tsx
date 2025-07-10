import { Button } from "@/src/shared/ui";
import s from "../styles.module.css";
import cn from "classnames";
import HeroSlider from "./HeroSlider";
import HeroBullets from "./HeroBullets";
import { Rating } from "@/src/widgets/review";

const Hero = ({ title }: HeroProps) => {
  return (
    <section className={cn(s.heroSection, "hero")}>
      <div className="container">
        <div className={s.hero}>
          <div className={s.hero__text}>
            <h1
              className={s.hero__title}
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
            <p className={s.hero__subtitle}>
              В квартиру, частный дом, офис, магазин.
              <br />
              <b>С гарантией, под ключ!</b>
            </p>
          </div>
          <div className={s.hero__cta}>
            <Button className={s.hero__ctaButton}>
              Рассчитать стоимость кондиционера
            </Button>
          </div>
          <HeroSlider />
          <HeroBullets />
          <Rating className={s.hero__rating} />
        </div>
      </div>
    </section>
  );
};

interface HeroProps {
  title: string;
}

export default Hero;
