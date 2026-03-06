import Counter from "@/src/shared/ui/Counter/Counter";

const QuizCounter = ({ value, unit, setAnswer }: Props) => {
  return (
    <Counter
      value={value}
      unit={unit}
      increment={() => setAnswer(value ? Number(value) + 1 : 1)}
      decrement={() => setAnswer(value ? Number(value) - 1 : 0)}
      setValue={(val) => setAnswer(Number(val))}
    />
  );
};

interface Props {
  value?: number;
  unit?: string;
  setAnswer: (answer: string | number) => void;
}

export default QuizCounter;
