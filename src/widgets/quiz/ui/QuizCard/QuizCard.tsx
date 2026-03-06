import Image from "next/image";
import s from "./styles.module.css";
import Check from "../Check/Check";
import React from "react";

const QuizCard = React.memo(({ img, name, chosen = false, onClick }: Props) => {
  return (
    <div className={s.card__option} onClick={() => onClick(name)}>
      <div className={s.card__optionImg}>
        {img && (
          <Image src={img} alt={name} fill style={{ objectFit: "cover" }} />
        )}
        {chosen && <Check />}
      </div>
      <p className={s.card__optionText}>{name}</p>
    </div>
  );
});

interface Props {
  img: string;
  name: string;
  chosen?: boolean;
  onClick: (answer: string | number) => void;
}

QuizCard.displayName = "QuizCard";

export default QuizCard;
