'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    // get the current pathname
    const pathname = usePathname();
    // Nav links and their paths and labels
    const navLinks = [
        { href: "bio", label: "About" },
        { href: "contact", label: "Contact" },
        { href: "projects", label: "Projects" },
        { href: "skills", label: "Skills" }
    ];
    return (
        <nav >
            <h1 className="brand">
                <Link href="/">
                    <Image
                        src="/tinedev.svg"
                        width={300}
                        height={47}
                        alt="Brand logo, a stylized outline representing a brain with text that spells 'tinedev'"
                        priority // load image first
                    />
                </Link>
            </h1>
            {/* List of nav links */}
            <ul className="navbar">
                {navLinks.map(({ href, label }) => (
                    <li key={href}>
                        {/* If current route matches Link, apply 'active' class */}
                        <Link
                            href={href}
                            className={`link ${pathname === href ? "active" : ""}`}
                        >{label}
                        </Link>
                    </li>
                ))}
                {/* <li><Link href="/bio" className="link">About</Link></li>
                <li><Link href="/contact" className="link">Contact</Link></li>
                <li><Link href="/projects" className="link">Projects</Link></li>
                <li><Link href="/skills" className="link">Skills</Link></li> */}
            </ul>
        </nav>
    );
}