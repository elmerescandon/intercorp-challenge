import axios from "axios";
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
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_MYPAGE_URL}/api/vtex?skuId=${SKU}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            skuId: SKU,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("No se ha podido obtener la información del producto.");
      }
      const responseData = await res.json();
      return responseData.data as IVTEXProduct[];
    } catch (e) {
      throw e;
    }
  }
}

export default VTEXFetch;
