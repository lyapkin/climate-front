"use client";
import { useEffect, useRef } from "react";
import s from "./styles.module.css";

const Counter = ({
  value,
  unit,
  increment,
  decrement,
  setValue,
}: CounterProps) => {
  const val = value === undefined ? "..." : value;
  const ref = useRef<HTMLInputElement>(null);

  const fixCursorPosition = () => {
    const input = ref.current;
    if (input) {
      const position = String(val).length;
      input.setSelectionRange(position, position);
    }
  };

  useEffect(() => {
    fixCursorPosition();
  }, [value]);

  return (
    <div className={s.counter}>
      <span className={s.counter__minus}>
        <button onClick={decrement} disabled={value === undefined}>
          -
        </button>
      </span>
      <span
        className={s.counter__count}
        onClick={() => {
          ref.current?.focus();
        }}
      >
        <input
          className={s.counter__input}
          value={String(val) + unit}
          onChange={(e) => {
            setValue(e.target.value.replace(/\D/g, ""));
          }}
          onClick={fixCursorPosition}
          onSelect={(e) => {
            const start = e.currentTarget.selectionStart ?? 0;
            if (start > String(val).length) fixCursorPosition();
          }}
          onKeyUp={fixCursorPosition}
          ref={ref}
        />
      </span>
      <span className={s.counter__plus}>
        <button onClick={increment} disabled={value === undefined}>
          +
        </button>
      </span>
    </div>
  );
};

interface CounterProps {
  value?: number;
  unit?: string;
  setValue: (val: string) => void;
  increment: () => void;
  decrement: () => void;
}

export default Counter;
