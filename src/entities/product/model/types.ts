// import { Metadata } from "@/src/shared/types";

type ProductImg = {
  id: number;
  url: string;
};

type AttributeValue = {
  id: number;
  name: string;
};

type Attribute = {
  id: number;
  attr: {
    name: string;
    unit: string;
  };
  values: AttributeValue[];
};

type ProductDoc = {
  id: number;
  name: string;
  url: string;
};

export type ProductBase = {
  id: number;
  slug: string;
  name: string;
  stock: boolean;
  price: number;
  discount?: number;
  attrs: Attribute[];
};

export type ProductDetail = {
  imgs: ProductImg[];
  description: string;
  docs: ProductDoc[];
  // metadata: Metadata;
  code: string;
} & ProductBase;

export type ProductPreview = {
  img?: string;
} & ProductBase;

export type ProductCartResponse = {
  img?: string;
  code: string;
} & ProductBase;

export type ProductCart = {
  img?: string;
  code: string;
} & ProductBase;
