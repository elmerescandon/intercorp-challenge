import {NextResponse} from "next/server";

export async function POST(request: Request) {
  const postData: {skuId: string} = await request.json();
  const {skuId} = postData;

  try {
    const res = await fetch(
      `https://www.promart.pe/api/catalog_system/pub/products/search?fq=skuId:${skuId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status !== 200) {
      throw new Error("Error al obtener el producto.");
    }
    const data = await res.json();
    return NextResponse.json({data});
  } catch (e) {
    NextResponse.json(
      {error: "Error al obtener el producto."},
      {status: 501, statusText: "Error al obtener el producto."}
    );
  }
}

export const dynamic = "force-static";
