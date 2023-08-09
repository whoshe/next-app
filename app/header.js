import Link from 'next/link';

export default async function Header() {
  const resp = await fetch('http://localhost:9999/topics');
  const topics = await resp.json();

  return (
    <>
      <section className="container mx-auto max-w-3xl flex flex-col justify-center flex-grow p-4">
        <h1>
          <Link href="/">Web</Link>
        </h1>
        <ol>
          {topics.map((topic) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
