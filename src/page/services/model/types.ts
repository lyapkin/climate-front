export type ServiceOption = {
  id: number;
  name: string;
  price: number;
};

export type Service = {
  id: number;
  name: string;
  options: ServiceOption[];
};
