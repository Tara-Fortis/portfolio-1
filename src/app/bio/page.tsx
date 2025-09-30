import React from 'react';
import Image from 'next/image';

const BioPage = () => {
    return (
        <main>
            <Image
                src="/portfolio-photo.jpeg"
                alt="Photo of Tineil"
                className="photo"
                width={371}
                height={371}/>
            <h1>About Me</h1>
            <p>I&apos;m a student webdeveloper currently studying Interactive Media Design at Georgian College. I&apos;m passionate about building dynamic, user-centred web experiences that blend clean code with thoughtful design.</p>
            <h2>Mission</h2>
            <p>My mission is to create accessible, responsive, and visually engaging websites and applications that solve real problems and elevate user experiences. I&apos;m committed to developing AODA compliant web and mobile apps that ensure inclusive access for all users.</p>
        </main>
    );
};

export default BioPage;