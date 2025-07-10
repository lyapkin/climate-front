export type RubricId = number | null;

export type Rubric = {
  id: RubricId;
  name: string;
};

export type handleChangeFunc = (value: RubricId) => void;
