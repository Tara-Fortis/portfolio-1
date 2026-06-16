import React from 'react';
import Image from 'next/image';

const ProjectsPage = () => {
    
    return (
        <main className="projects-container">
            <h1 className="page-title">My Projects</h1>
            <ul className="project-grid">
                <li className="project-card">
                    <Image
                        className="project-image"
                        src="/smoothie-machine.png"
                        alt="screenshot of the smoothie machine web-app"
                        width={500}
                        height={412}
                    />
                    <h3>Smoothie Machine</h3>
                    <p>
                        I developed a web-based smoothie ordering interface using HTML, CSS, and JavaScript.
                        Users select ingredients and preferences, and an object-oriented JavaScript class
                        generates a smoothie object and displays the order summary.
                    </p>
                    <p>This demonstrates my front-end and object-oriented programming skills.</p>
                </li>
                <li className="project-card">
                    <Image
                        className="project-image"
                        src="/pokemon-card.png"
                        alt="screenshot of a pokedex web app"
                        width={500}
                        height={349}
                    />
                    <h3>Pokédex Web App</h3>
                    <p>
                        A dynamic Pokédex built with HTML, CSS, and JavaScript, powered by the Pokémon API.
                        Users select a Pokémon image, and the app displays its name, ID, species, and a short AI-generated description.
                    </p>
                    <p>This highlights my ability to integrate APIs and manage asynchronous data.</p>
                </li>
                <li className="project-card">
                    <Image
                        className="project-image"
                        src="/parent-user.jpg"
                        alt="sample persona"
                        width={500}
                        height={325}
                    />
                    <h3>User Persona</h3>
                    <p>
                        I created a user persona in Figma for an adult woman seeking tech to monitor her children&apos;s online activity.
                        The profile includes her profession, income, tech comfort level, personal quote, and device visuals.
                    </p>
                    <p>This showcases my user-centered design approach and persona development skills.</p>
                </li>
            </ul>
        </main>
    );
};

export default ProjectsPage;
