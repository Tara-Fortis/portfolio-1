'use client';

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav >
            <h1 className="brand">
                <Link href="/">
                    <Image
                        src="/tinedev.svg"
                        width={300}
                        height={47}
                        alt="Brand logo, a stylized outline representing a brain with text that spells 'tinedev'"
                    />
                </Link>
            </h1>
            <ul className="navbar">
                <li><Link href="/bio">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/skills">Skills</Link></li>
            </ul>
        </nav>
    );
}