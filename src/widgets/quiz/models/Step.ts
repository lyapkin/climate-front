type StepBase = {
  step: number;
  type: "choice" | "counter";
  name: string;
  question: string;
};

export type Step =
  | ({
      type: "choice";
      options: {
        img: string;
        name: string;
        id: number;
      }[];
    } & StepBase)
  | ({ type: "counter"; unit?: string } & StepBase);
