export interface IBenefit {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export interface IProduct {
  url: string;
  category: string;
  name: string;
  brand: string;
  SKU: string;
  regularPrice: string;
  offerPrice: string;
  discount: string;
  description: string;
  characteristics: string;
}

export interface IProductSpecification {
  specName: string;
  spectText: string;
}
