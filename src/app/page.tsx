'use client';

import Image from "next/image";
import Button from 'react-bootstrap/Button';
import { FaGithub } from "react-icons/fa";


export default function Home() {
  return (
    <main id="bio">
      <section className="bio-header">
        <h1>Tineil Armstrong | UX/UI Designer & Web Developer</h1>
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
          <Button
            as="a"
            href="/Tineil_Armstrong_Resume.pdf"
            download="Tineil_Armstrong_Resume.pdf"
            className="ms-1 rounded-pill"
          >
            Download my resume
          </Button>
          <Button
            href="https://github.com/Tara-Fortis"
            target="_blank"
            rel="noopener noreferrer"
            className="ms-1 rounded-pill"
          >
            <FaGithub className="me-2" />
            View GitHub
          </Button>
        </div>
      </section>
    </main>
  );
}