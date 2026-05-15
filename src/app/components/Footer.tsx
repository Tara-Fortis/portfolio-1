import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footbar">
            <ul className="flex-row">
                <li>
                    <Link
                        href="https://www.linkedin.com/in/tineil-armstrong-b270957b/"
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
                </li>
                <li>
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
                </li>
            </ul>
            <br />
            <div className="copyright">
                &copy; 2025 Tineil Armstrong. All rights reserved.
            </div>
        </footer>
    );
}