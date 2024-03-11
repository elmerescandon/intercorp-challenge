import {IProduct, IProductSpecification} from "./interfaces";
import {IVTEXProduct} from "./services/VTEX/VTEX.interface";

export const VTEXProductToProduct = (product: IVTEXProduct): IProduct => {
  const getLastCategory = (categories: string[]): string => {
    const lastCategoryPath = categories[categories.length - 1];
    const splitPath = lastCategoryPath.split("/");
    return splitPath[splitPath.length - 1];
  };

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
    characteristics: product.Características.join(", "),
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
