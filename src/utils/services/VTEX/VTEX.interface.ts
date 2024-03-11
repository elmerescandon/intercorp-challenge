export interface IVTEXProduct {
  productId: string;
  productName: string;
  brand: string;
  brandId: number;
  brandImageUrl: null | string;
  linkText: string;
  productReference: string;
  productReferenceCode: string;
  categoryId: string;
  productTitle: string;
  metaTagDescription: string;
  releaseDate: string;
  searchableClusters: {};
  categories: string[];
  categoriesIds: string[];
  link: string;
  Promociones: string[];
  description: string;
  Características: string[];
  items: [
    {
      itemId: string;
      name: string;
      nameComplete: string;
      complementName: string;
      ean: string;
      referenceId: IVTEXReference[];
      measurementUnit: string;
      unitMultiplier: number;
      modalType: null;
      isKit: false;
      images: IVTEXImage[];
      sellers: IVTEXSeller[];
      Videos: [];
      estimatedDateArrival: null;
    }
  ];
  "Ficha Tecnica": string[];
  [key: string]: any;
}

interface IVTEXImage {
  imageId: string;
  imageLabel: null | string;
  imageTag: string;
  imageUrl: string;
  imageText: string;
  imageLastModified: string;
}

interface IVTEXInstallment {
  Value: number;
  InterestRate: number;
  TotalValuePlusInterestRate: number;
  NumberOfInstallments: number;
  PaymentSystemName: string;
  PaymentSystemGroupName: string;
  Name: string;
}

interface IVTEXSeller {
  sellerId: string;
  sellerName: string;
  addToCartLink: string;
  sellerDefault: boolean;
  commertialOffer: {
    DeliverySlaSamplesPerRegion?: any;
    Installments: IVTEXInstallment[];
    DiscountHighLight?: any;
    GiftSkuIds?: any;
    Teasers?: any[];
    PromotionTeasers?: any[];
    BuyTogether?: any[];
    ItemMetadataAttachment?: any[];
    Price: number;
    ListPrice: number;
    PriceWithoutDiscount: number;
    FullSellingPrice: number;
    RewardValue: number;
    PriceValidUntil: string;
    AvailableQuantity: number;
    IsAvailable: boolean;
    Tax: number;
    DeliverySlaSamples?: any[];
    GetInfoErrorMessage: null;
    CacheVersionUsedToCallCheckout: string;
    PaymentOptions: any;
  };
}

interface IVTEXReference {
  Key: string;
  Value: string;
}
