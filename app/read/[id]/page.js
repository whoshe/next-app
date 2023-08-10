export default async function Read(props) {
  const resp = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `topics/${props.params.id}`,
    { cache: 'no-store' },
  );
  const topic = await resp.json();
  return (
    <>
      <section className="container mx-auto max-w-3xl flex flex-col justify-center flex-grow p-4">
        <h2>{topic.title}</h2>
        <p>{topic.body}</p>
      </section>
    </>
  );
}
