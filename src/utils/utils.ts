import {IProduct, IProductSpecification} from "./interfaces";
import {IVTEXProduct} from "./services/VTEX/VTEX.interface";

export const VTEXProductToProduct = (product: IVTEXProduct): IProduct => {
  const getLastCategory = (categories: string[]): string => {
    const lastCategoryPath = categories[0];
    const splitPath = lastCategoryPath.split("/");
    return splitPath[splitPath.length - 2];
  };

  let characteristics = "";
  try {
    characteristics = product.Características.join(", ") || "";
  } catch (e) {
    characteristics = "";
  }

  return {
    name: product.productName,
    category: getLastCategory(product.categories),
    brand: product.brand,
    regularPrice: product.items[0].sellers[0].commertialOffer.ListPrice,
    offerPrice: product.items[0].sellers[0].commertialOffer.Price,
    discount: Math.round(
      (1 -
        product.items[0].sellers[0].commertialOffer.Price /
          product.items[0].sellers[0].commertialOffer.ListPrice) *
        100
    ),
    SKU: product.items[0].itemId,
    url: product.link,
    description: product.description,
    characteristics: characteristics,
    imageURL: product.items[0].images[0].imageUrl,
  };
};

export const VTEXProductSpecs = (
  product: IVTEXProduct
): IProductSpecification[] => {
  const dataSheetArray = product["Ficha Técnica"];
  const specs: IProductSpecification[] = [];

  dataSheetArray.forEach((specName: string) => {
    specs.push({
      specName: specName,
      // Spec value is an array of string, join them
      spectText: product[specName].join(", "),
    });
  });
  return specs;
};

export const delay = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
