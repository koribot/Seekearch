import puppeteer from 'puppeteer';


export async function GET(req: any) {
  const search_param = req.nextUrl.searchParams.get("q");
  const link = decodeURIComponent(search_param);
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(link);
    const html = await page.content();
    await browser.close();
    return Response.json(html);
  } catch (err) {
    console.log(err);
    return Response.json({ err });
  }
}
