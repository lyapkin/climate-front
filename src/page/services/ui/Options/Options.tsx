import { useState } from "react";
import { Service } from "../../model";
import s from "./styles.module.css";
import cn from "classnames";
import Btn from "../Btn/Btn";
import { Scrollable } from "@/src/shared/ui/scrollable";

const Options = ({ data }: Props) => {
  const [currentOption, setCurrentOption] = useState(0);

  return (
    <div className={s.options}>
      <Scrollable orientation="horizontal">
        <ul className={s.options__btns}>
          {data.map((item, i) => (
            <li key={item.id}>
              <Btn
                onClick={() => setCurrentOption(i)}
                active={currentOption === i}
              >
                {item.name}
              </Btn>
            </li>
          ))}
        </ul>
      </Scrollable>

      <p className={s.options__title}>
        {data[currentOption].name} включает в себя:
      </p>

      <ul className={cn(s.options__items, s.items)}>
        {data[currentOption].items.map((item) => (
          <li key={item.id} className={s.items__item}>
            {item.text}
          </li>
        ))}
      </ul>

      <p className={s.options__title}>
        Стоимость от {data[currentOption].price}Р
      </p>

      <div
        className={s.options__description}
        dangerouslySetInnerHTML={{ __html: data[currentOption].description }}
      />
    </div>
  );
};

interface Props {
  data: Service["options"];
}

export default Options;
