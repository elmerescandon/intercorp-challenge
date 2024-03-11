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

      if (!responseProduct.ok)
        throw new Error(
          "Error al recibir data de PROMART, inténtelo más tarde"
        );

      const responseData: IVTEXProduct[] = await responseProduct.json();
      return responseData;
    } catch (e) {
      throw e;
    }
  }
}

export default VTEXFetch;
