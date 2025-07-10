export type ServicePart = {
  id: number;
  name: string;
  price: number;
};

export type Service = {
  id: number;
  name: string;
  parts: ServicePart[];
};
