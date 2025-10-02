'use client';

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <p>Explore my work, dive into my projects, and get to know me better on the <Link href="/bio" className="about">about</Link> page.</p>
      <p>My mission is to build exceptional websites that are fast, reliable, and easy to use.</p>
    </main>
  );
}
