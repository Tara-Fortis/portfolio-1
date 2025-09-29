'use client';

import Link from "next/link";

export default function Navbar() {
    return (
        <nav >
            <h1 className="brand">
                <Link href="/">
                    Portfolio
                </Link>
            </h1>
            <ul className="navbar">
                <li><Link href="/bio">Bio</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/skills">Skills</Link></li>
                {/* <li><Link href="/about" className={getLinkClass('/about')}>About</Link></li> */}
            </ul>
        </nav>
    );
}