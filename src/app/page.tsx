'use client';
import { User } from '@prisma/client';
import bridg from 'bridg';
import { useEffect, useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Query your DB from the frontend 😎
    // see /prisma/rules.ts for how to secure your database
    bridg.user
      .findMany({
        // uncomment to filter your results:
        // where: { email: { contains: 'alice@prisma' } },
        // uncomment include related data:
        // include: { blogs: true },
      })
      .then((users) => setUsers(users));
  }, []);

  return (
    <div className="h-screen p-3">
      <button
        className="p-2 border rounded"
        onClick={() => {
          const name = `${getRanItem(FIRST_NAMES)} ${getRanItem(LAST_NAMES)}`;

          return bridg.user
            .create({
              data: {
                name,
                email: `${name.toLowerCase().replace(' ', '_')}@example.com`,
              },
            })
            .then((user) => setUsers((u) => [...u, user]));
        }}
      >
        create random user
      </button>

      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}

const getRanItem = <T,>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const FIRST_NAMES = [
  'John',
  'Jane',
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Frank',
  'Grace',
  'Heidi',
];

const LAST_NAMES = [
  'Smith',
  'Johnson',
  'Williams',
  'Jones',
  'Brown',
  'Davis',
  'Miller',
  'Wilson',
  'Moore',
  'Taylor',
];
