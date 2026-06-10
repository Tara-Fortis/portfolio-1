import Link from "next/link";
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <Container fluid className="text-center">
                <Row>
                    <Col>
                        <h1>Contact Me</h1>
                        <Link
                            href="https://www.linkedin.com/in/tineil-armstrong/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/In.png"
                                alt="linkedin logo"
                                className="lnlogo"
                                width={2212}
                                height={540}
                            />
                        </Link>
                        <Link
                            href="https://github.com/Tara-Fortis"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/GitHub_Invertocat_White.png"
                                alt="github logo"
                                className="lnlogo"
                                width={2212}
                                height={540} />
                        </Link>
                        <span className="lnlogo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="auto" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                        </span>
                    </Col>
                </Row>
                <Row className="pt-4 text-small">
                    <p>&copy; {new Date().getFullYear()} Tineil Armstrong. All rights reserved.</p>
                </Row>
            </Container>
        </footer>
    );
}