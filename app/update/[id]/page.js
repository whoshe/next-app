'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Update(props) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const id = props.params.id;
  async function refresh() {
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + `topics/${id}`);
    const topic = await resp.json();
    setTitle(topic.title);
    setBody(topic.body);
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <>
          <section className="container mx-auto max-w-3xl flex flex-col justify-center flex-grow p-4">

      <h1>Update</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          const resp = await fetch(`http://localhost:9999/topics/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, body }),
          });
          const topic = await resp.json();
          router.push(`/read/${topic.id}`);
          router.refresh();
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          name="body"
          placeholder="body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      </section>
    </>
  );
}
