'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from 'react';
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";


export default function Header() {
    // get the current pathname
    const pathname = usePathname();
    // Nav links and their paths and labels
    const navLinks = [
        { href: "/projects", label: "Projects" },
        { href: "/skills", label: "Skills" }
    ];
    return (
        <Navbar expand="lg" className="navbar-dark">
            <Container>
                <Navbar.Brand href="/" className="fw-bold fs-4">
                    TINEIL ARMSTRONG
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                    <Nav className="align-items-lg-center gap-2">
                        {navLinks.map(({ href, label }) => (
                            <Nav.Item key={href} className="fw-medium px-3">
                                {/* If current route matches Link, apply 'active' class */}
                                <Link
                                    href={href}
                                    className={`nav-link ${pathname === href ? "active" : ""}`}
                                >{label}
                                </Link>
                            </Nav.Item>
                        ))}
                        <Nav.Link
                            href="https://www.linkedin.com/in/tineil-armstrong"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-dark rounded-pill px-4 ms-lg-2 d-inline-flex align-items-center gap-2 fw-semibold shadow-sm"
                            style={{ paddingBlock: '0.4rem' }}
                        >
                            Say Hello <FaLinkedin size={16} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}