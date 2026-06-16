'use client';

import Link from "next/link";
import Image from "next/image";
import Button from 'react-bootstrap/Button';


export default function Home() {
  return (
    <main id="bio">
      <section className="bio-header">
        <h1>Tineil Armstrong | UX/UI Designer</h1>
        <Image
          src="/portfolio-photo.jpeg"
          alt="Photo of Tineil"
          width={211}
          height={211}
          className="bio-photo"
        />
        <h2>Building high-performance, accessible digital experiences from front to back.</h2>
        
        <div className="d-flex">
          <Button href="/projects" className="me-1 rounded-pill">View My Projects</Button>
          <Button href="/contact" className="ms-1 rounded-pill">Download my resume</Button>
        </div>
      </section>
    </main>
  );
}