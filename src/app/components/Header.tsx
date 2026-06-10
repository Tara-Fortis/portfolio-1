'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as React from 'react';
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";

export default function Header() {
    // get the current pathname
    const pathname = usePathname();
    // Nav links and their paths and labels
    const navLinks = [
        { href: "projects", label: "Projects" },
        { href: "skills", label: "Skills" },
        { href: "contact", label: "Contact" }
    ];
    return (
        <Navbar expand="lg" className="navbar-dark">
            <Container>
                <Navbar.Brand href="/" className="me-auto">
                    <Image
                        src="/tinedev.svg"
                        width={300}
                        height={40}
                        alt="Brand logo, a stylized outline representing a brain with text that spells 'tinedev'"
                        priority // load image first
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-end">
                        {navLinks.map(({ href, label }) => (
                            <Nav.Item key={href} className="nav-item">
                                {/* If current route matches Link, apply 'active' class */}
                                <Link
                                    href={href}
                                    className={`nav-link ${pathname === href ? "active" : ""}`}
                                >{label}
                                </Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}