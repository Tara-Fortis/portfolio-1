import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <ul className="footbar">
                <li>
                    <Link href="https://www.linkedin.com/in/tineil-armstrong-b270957b/">
                        <Image
                            src="/In.png"
                            alt="linkedin logo"
                            className="lnlogo"
                            width={2212}
                            height={540} />
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/Tara-Fortis">
                        <Image
                            src="/git.svg"
                            alt="github logo"
                            className="lnlogo"
                            width={2212}
                            height={540} />
                    </Link>
                </li>
            </ul>
        </footer>
    );
}