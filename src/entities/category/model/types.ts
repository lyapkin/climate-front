type CategoryBase = {
  id: number;
  name: string;
  slug: string;
};

export type Category = {
  img?: string;
  children: CategoryBase[];
} & CategoryBase;

export type CategoryDetail = {
  children: CategoryBase[];
  parents: CategoryBase[];
} & CategoryBase;
