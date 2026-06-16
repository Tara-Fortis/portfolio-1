import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub, FaLink } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-5">
            <Container fluid>
                <Row className="text-center">
                    <Col>
                        <h3 className="h5 mb-4 text-uppercase tracking-wider">Let&apos;s build something together</h3>
                        <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
                            <Link
                                href="https://www.linkedin.com/in/tineil-armstrong/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover-opacity"
                                aria-label="View Tineil's LinkedIn Profile"
                            >
                                <FaLinkedin size={32} />
                            </Link>
                            <Link
                                href="https://github.com/Tara-Fortis"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover-opacity"
                                aria-label="View Tineil's GitHub Repository"
                            >
                                <FaGithub size={32} />
                            </Link>
                            <Link
                                href="mailto:tine6573@gmail.com"
                                className="text-white hover-opacity"
                                aria-label="Send Tineil an email"
                            >
                                <FaEnvelope size={32} />
                            </Link>
                        </div>

                    </Col>
                </Row>
                <Row className="text-center pt-2 border-top border-secondary-subtle">
                    <Col>
                        <p className="small mb-0">
                            &copy; {new Date().getFullYear()} Tineil Armstrong. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}