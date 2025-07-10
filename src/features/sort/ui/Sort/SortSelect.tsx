"use client";
import s from "./styles.module.css";
import useToggle from "../../utils/useToggle";
import useSelectChange from "../../utils/useSelectChange";
import useIsInteractive from "@/src/shared/utils/client/useIsInteractive";
import { ArrowFilledIcon } from "@/src/shared/icons";

const SortSelect = () => {
  const isInterctive = useIsInteractive();
  const { open, setOpen, outsideClickCloseRef } = useToggle();
  const { currentValue, handleChange, options } = useSelectChange(() => {
    setOpen(false);
  });

  return (
    <>
      <button
        className={s.sort__button}
        disabled={!isInterctive}
        onClick={() => setOpen(!open)}
      >
        <span className={s.sort__currentCalue}>{currentValue}</span>
        <span
          className={`${s.sort__buttonIcon} ${open && s.sort__buttonIcon_open}`}
        >
          <ArrowFilledIcon />
        </span>
      </button>
      <div ref={outsideClickCloseRef}>
        <ul className={`${s.sort__options} ${open && s.sort__options_open}`}>
          {Object.entries(options).map(([key, value]) => {
            return (
              <li key={key} className={s.sort__optionsItem}>
                <label>
                  {value}
                  <input
                    onClick={() => handleChange(key)}
                    type="radio"
                    value={value}
                    checked={currentValue === value}
                    readOnly
                  />
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SortSelect;
