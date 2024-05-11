export default function Page({ params }: { params: { slug: string } }) {
  return <div>Searching: {params.slug}</div>;
}
