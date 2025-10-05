'use client';

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main id="bio">
      <section className="bio-header">
        <Image
          src="/portfolio-photo.jpeg"
          alt="Photo of Tineil"
          width={211}
          height={211}
          className="bio-photo"
        />
        <h1>Welcome!</h1>
        <p>
          I&apos;m Tineil Armstrong, a passionate web developer. Explore my work, dive into my projects,
          and get to know me better on the <Link href="/bio" className="about">about</Link> page.
        </p>
      </section>
      <section className="bio-mission">
        <h2>Mission</h2>
        <p>
          My mission is to build exceptional websites that are fast, reliable, accessible, and easy to use.
          I focus on creating dynamic, user-centered experiences that blend clean code with thoughtful design.
        </p>
      </section>
    </main>
  );
}