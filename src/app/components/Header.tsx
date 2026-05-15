'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as React from 'react';
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

export default function Header() {
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
        <Navbar expand="lg" className="navbar-dark">
            <Container>
                <Navbar.Brand href="/">
                        <Image
                            src="/tinedev.svg"
                            width={300}
                            height={47}
                            alt="Brand logo, a stylized outline representing a brain with text that spells 'tinedev'"
                            priority // load image first
                        />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="navBarToggler"/>
                <Nav className="collapse navbar-collapse" >
                    <ul className="navbar-nav me-auto">
                        {navLinks.map(({ href, label }) => (
                            <li key={href} className="nav-item">
                                {/* If current route matches Link, apply 'active' class */}
                                <Link
                                    href={href}
                                    className={`nav-link ${pathname === href ? "active" : ""}`}
                                >{label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Nav>
            </Container>
        </Navbar>
    );
}