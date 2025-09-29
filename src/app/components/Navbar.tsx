'use client';

import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link href="/"><h1>Portfolio</h1></Link></li>
                <li><Link href="/bio">Bio</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/skills">Skills</Link></li>
                {/* <li><Link href="/about" className={getLinkClass('/about')}>About</Link></li> */}
            </ul>
        </nav>
    );
}