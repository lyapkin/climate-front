export type Review = {
  id: number;
  createdAt: number;
  score: number;
  text: string;
  sender?: { name: string };
};
