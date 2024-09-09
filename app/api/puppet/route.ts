import { chromium } from 'playwright';

export async function GET(req: any) {
  const search_param = req.nextUrl.searchParams.get("q");
  const link = decodeURIComponent(search_param);
  try {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(link);
    const html = await page.content();
    await browser.close();
    return Response.json(html);
  } catch (err) {
    console.log(err);
    return Response.json({ err });
  }
}
