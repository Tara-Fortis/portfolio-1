import React from 'react';
import Image from 'next/image';

const SkillsPage = () => {
    return (
        <main id="skills">
            <h1>My Skills</h1>
            <ul>
                {[
                    { src: "/html.svg", alt: "HTML icon", label: "HTML" },
                    { src: "/css.svg", alt: "CSS icon", label: "CSS" },
                    { src: "/javascript.svg", alt: "JavaScript icon", label: "JavaScript" },
                    { src: "/c-sharp.png", alt: "C# icon", label: "C#", size: 64 },
                    { src: "/net-framework.svg", alt: ".NET Framework icon", label: "ASP.NET Core" },
                    { src: "/nextjs.png", alt: "Next.js icon", label: "Next.js" },
                    { src: "/GitHub_Invertocat_Black.png", alt: "GitHub icon", label: "GitHub" },
                    { src: "/angular_gradient.png", alt: "Angular icon", label: "Angular" },
                    { src: "/react-icon.svg", alt: "React icon", label: "React" },
                    { src: "/ts-logo-256.svg", alt: "TypeScript icon", label: "TypeScript" },
                    { src: "/MongoDB_Logomark_ForestGreen.svg", alt: "MongoDB icon", label: "MongoDB" },
                    { src: "/logo-mysql.png", alt: "MySQL icon", label: "MySQL" },
                    { src: "/php-logo.svg", alt: "PHP icon", label: "PHP" },
                    { src: "/WordPress.png", alt: "WordPress icon", label: "WordPress" },
                    { src: "/logos_figma.png", alt: "Figma icon", label: "Figma" },
                    { src: "/Adobe_Photoshop.png", alt: "Adobe Photoshop icon", label: "Photoshop" },
                    { src: "/Adobe_Illustrator.png", alt: "Adobe Illustrator icon", label: "Illustrator" },
                ].map(({ src, alt, label, size = 48 }) => (
                    <li key={label} className="skill">
                        <Image src={src} alt={alt} width={size} height={size} />
                        <span>{label}</span>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default SkillsPage;


// map() https://legacy.reactjs.org/docs/lists-and-keys.html