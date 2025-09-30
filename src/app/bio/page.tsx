import React from 'react';
import Image from 'next/image';

const BioPage = () => {
    return (
        <main>
            <Image
                src="/portfolio-photo.jpeg"
                alt="Photo of Tineil"
                className="photo"
                width={400}
                height={400}/>
            <h1>About Me</h1>
            <p>A Bio page (or About Me page). A recent Image of you and a short paragraph that outlines your personal mission.</p>
        </main>
    );
};

export default BioPage;