import React from 'react';
import Image from 'next/image';

const BioPage = () => {
    return (
        <main id="bio">
            <section className="bio-header">
                <Image
                    src="/portfolio-photo.jpeg"
                    alt="Photo of Tineil"
                    width={211}
                    height={211}
                    className="bio-photo"
                />
                <h1>About Me</h1>
                <p>
                    I recently graduated from the Interactive Media Design Program from Georgian College. I am currently seeking work.</p>
                <p>
                    I am passionate about building dynamic, user-centred web experiences that blend clean code with thoughtful design.
                </p>
            </section>
            <section className="bio-mission">
                <h2>Mission</h2>
                <p>
                    My mission is to create accessible, responsive, and visually engaging websites and applications that solve real problems and elevate user experiences.
                    I&apos;m committed to developing AODA compliant web and mobile apps that ensure inclusive access for all users.
                </p>
            </section>
        </main>
    );
};

export default BioPage;
