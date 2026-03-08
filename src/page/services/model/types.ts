type OptionInclude = {
  id: number;
  text: string;
};

export type ServiceOption = {
  id: number;
  name: string;
  price: number;
  description: string;
  items: OptionInclude[];
};

export type Service = {
  id: number;
  name: string;
  options: ServiceOption[];
};
