'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default async function Bottom() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  return (
    <>
      <section className="container mx-auto max-w-3xl flex flex-col justify-center flex-grow p-4">
        <ul>
          <li>
            <Link href="/create">Create</Link>
          </li>
          {id ? (
            <>
              <li>
                <Link href={'/update/' + id}>Update</Link>
              </li>
              <li>
                <button
                  type="button"
                  value="delete"
                  onClick={async () => {
                    const resp = await fetch(
                      process.env.NEXT_PUBLIC_API_URL + `topics/${id}`,
                      {
                        method: 'DELETE',
                      },
                    );
                    await resp.json();
                    router.refresh();
                    router.push('/');
                  }}
                >
                  Delete
                </button>
              </li>
            </>
          ) : null}
        </ul>
      </section>
    </>
  );
}
