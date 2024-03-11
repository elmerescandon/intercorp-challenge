import {IVTEXProduct} from "./VTEX.interface";

class VTEXFetch {
  private static instance: VTEXFetch;
  private static url = "https://www.promart.pe/api";

  // Singleton pattern
  static getInstance(): VTEXFetch {
    if (!VTEXFetch.instance) {
      VTEXFetch.instance = new VTEXFetch();
    }
    return VTEXFetch.instance;
  }

  static async getProductBySearch(SKU: string) {
    try {
      const responseProduct = await fetch(
        `${VTEXFetch.url}/catalog_system/pub/products/search?fq=skuId:${SKU}`
      );
      if (!responseProduct.ok) {
        throw new Error(
          "No se encontró el producto con el SKU indicado. Inténtelo de nuevo."
        );
      }

      const responseData: IVTEXProduct[] = await responseProduct.json();
      return responseData;
    } catch (e) {
      throw e;
    }
  }
}

export default VTEXFetch;
