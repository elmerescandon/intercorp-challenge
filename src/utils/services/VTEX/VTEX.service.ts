import {IVTEXProduct} from "./VTEX.interface";class VTEXFetch {
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
      console.log("HELLO PERUU");
      const res = await fetch(
        `https://us-central1-promart-sku-product.cloudfunctions.net/getData?skuId=${SKU}`,
        {
          method: "GET",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log("HELLO PERUU");
      // console.log(res);
      // if (!res.ok) {
      //   throw new Error("No se ha podido obtener la información del producto.");
      // }
      const responseData = await res.json();
      return responseData as IVTEXProduct[];
    } catch (e) {
      throw e;
    }
  }
}

export default VTEXFetch;
