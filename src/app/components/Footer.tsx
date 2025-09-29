import Link from "next/link";
export default function Footer() {
    return (
        <footer>
            <ul className="footbar">
                <li><Link href="https://www.linkedin.com/in/tineil-armstrong-b270957b/">LinkedIn</Link></li>
                <li><Link href="https://github.com/Tara-Fortis">GitHub</Link></li>
            </ul>
        </footer>
    );
}