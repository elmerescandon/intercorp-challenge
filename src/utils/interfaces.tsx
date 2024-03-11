export interface IBenefit {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export interface IProduct {
  imageURL: string;
  url: string;
  category: string;
  name: string;
  brand: string;
  SKU: string;
  regularPrice: number;
  offerPrice: number;
  discount: number;
  description: string;
  characteristics: string;
}

export interface IProductSpecification {
  specName: string;
  spectText: string;
}
