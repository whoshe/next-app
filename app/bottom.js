'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default async function Bottom() {
  const params = useParams();
  const id = params.id;

  return (
    <>
      <section>
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
                <button type="button" value="delete">
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
