'use client';
import { useRouter } from 'next/navigation';
import { Result } from 'postcss';

export default function Create() {
  const router = useRouter();
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, body }),
          };
          fetch(`${process.env.NEXT_PUBLIC_API_URL}topics`, options)
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              const lastid = result.id;
              router.refresh();
              router.push(`/read/${lastid}`);
            });
        }}
      >
        <input type="text" name="title" placeholder="title" />
        <textarea name="body" placeholder="body" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
