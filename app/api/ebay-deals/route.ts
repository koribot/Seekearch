import type { NextRequest } from "next/server";
import axios from "axios";
export const ebaySiteUrlMapping: Record<string, string> = {
    EBAY_US: "https://www.ebay.com/",
    EBAY_GB: "https://www.ebay.co.uk/",
    EBAY_DE: "https://www.ebay.de/",
    EBAY_AU: "https://www.ebay.com.au/",
    EBAY_IT: "https://www.ebay.it/",
    EBAY_CA: "https://www.ebay.ca/",
    EBAY_ES: "https://www.ebay.es/",
    EBAY_FR: "https://www.ebay.fr/",
    EBAY_HK: "https://www.ebay.com.hk/",
    EBAY_SG: "https://www.ebay.com.sg/",
    EBAY_IE: "https://www.ebay.ie/",
    EBAY_PL: "https://www.ebay.pl/",
    EBAY_NL: "https://www.ebay.nl/",
    EBAY_AT: "https://www.ebay.at/",
    EBAY_CH: "https://www.ebay.ch/",
    EBAY_BE: "https://www.ebay.be/",
  };
export async function GET(request: NextRequest) {
  // const { data } = middleware(request);
  // if (data === "Unauthorized") {
  //   return new Response("Unauthorized", { status: 401 });
  // }
  const site = request.nextUrl.searchParams.get("site");
  if (site) {
    try {
      const response = await axios.get(`${ebaySiteUrlMapping[site]}deals`);
      const htmlContent = response.data;

      // Return the HTML content as a string with the appropriate Content-Type header
      return new Response(htmlContent, {
        headers: { "Content-Type": "text/html" },
      });
    } catch (error) {
      console.log(error);
      return new Response("Failed at ebay-deals api", {
        status: 500,
        headers: { "Content-Type": "text/plain" },
      });
    }
  }
}
