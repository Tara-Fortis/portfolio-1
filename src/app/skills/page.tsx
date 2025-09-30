import React from 'react';
import Image from 'next/image';

const SkillsPage = () => {
    return (
        <main>
            <h1 className="container content-center">My Skills</h1>
            <ul className="container">
                <li>
                    <Image
                        src="/html.svg"
                        alt="HTML icon"
                        width={48}
                        height={48} />
                    HTML
                </li>
                <li>
                    <Image
                        src="/css.svg"
                        alt="CSS icon"
                        width={48}
                        height={48} />
                    CSS
                </li>
                <li>
                    <Image
                        src="/javascript.svg"
                        alt="JS icon"
                        width={48}
                        height={48} />
                    JavaScript
                </li>
                <li>
                    <Image
                        src="/c-sharp.png"
                        alt="C sharp icon"
                        width={64}
                        height={64} />
                    C#
                </li>
                <li>
                    <Image
                        src="/net-framework.svg"
                        alt=".net framework icon"
                        width={48}
                        height={48} />
                    ASP.NET Core
                </li>
                <li>
                    <Image
                        src="/nextjs.png"
                        alt="next js icon"
                        width={48}
                        height={48} />
                    Next.js
                </li>
                <li>
                    <Image
                        src="/git.svg"
                        alt="git icon"
                        width={48}
                        height={48} />
                    Git
                </li>
            </ul>
        </main>
    );
};

export default SkillsPage