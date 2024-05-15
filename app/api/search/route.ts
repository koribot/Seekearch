export async function GET(req: any) {
  const search_param = req.nextUrl.searchParams.get("q");
  const res = await fetch(
    "https://cors-anywhere.herokuapp.com/" + search_param,
    {
      headers: {
        "Content-Type": "application/json",
        Origin: "https://seekearch.vercel.app/",
      },
    }
  );
  const data = await res.text();

  return new Response(data);
}
