export async function GET(req: any) {
  const search_param = req.nextUrl.searchParams.get("q");
  const link = decodeURIComponent(search_param);
  try {
    const res = await fetch(link, {
      headers: {
        "Content-Type": "application/json",
        Origin: "https://seekearch.vercel.app/",
      },
    });
    const data = await res.text();
    return Response.json(data);
  } catch (err) {
    console.log(err);
    return Response.json({ err });
  }
}
