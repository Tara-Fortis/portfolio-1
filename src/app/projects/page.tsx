import React from 'react';
import Image from 'next/image';

const ProjectsPage = () => {
    return (
        <main>
            <h1>My Projects</h1>
            <ul className="project">
                <li>
                    <h3>Smoothie machine</h3>
                    <p>For this project, I developed a web-based smoothie ordering interface using HTML, CSS, and JavaScript. The application has form that allows users to select ingredients and preferences for their smoothie. When they submit their order, an object-oriented JavaScript class generates a smoothie object and dynamically displays the order summary on the page.</p>
                    <p>This assignment demonstrates my ability to apply front-end development principles and object-oriented programming.</p>
                    <Image
                        className="project-image"
                        src="/smoothie-machine.png"
                        alt="screenshot of the smoothie machine web-app"
                        width={500}
                        height={412} />
                </li>
                <li>
                    <h3>Pokedex Web App</h3>
                    <Image
                        className="project-image"
                        src="/pokemon-card.png"
                        alt="screenshot of a pokedex web app"
                        width={500}
                        height={349} />
                    <p>This project is a dynamic Pokédex built with HTML, CSS, and JavaScript, powered by the Pokémon API. Users can choose a Pokémon image, and the app responds by displaying its name, ID, species, and a short AI-generated description.</p>
                    <p>This project demonstrates my ability to integrate external APIs and manage asynchronous data.</p>
                </li>
                <li>
                    <h3>User Persona</h3>
                    <p>I created a user persona in Figma for an adult woman seeking tech to monitor her children&apos;s online activity. The profile includes her profession, income, comfort with technology, a personal quote, and visuals of devices she uses. She values simplicity, privacy, and reliability.</p>
                    <p>This project demonstrates my ability to apply user-centered design and build personas that inform thoughtful, real-world solutions.</p>
                    <Image
                        className="project-image"
                        src="/parent-user.jpg"
                        alt="sample persona"
                        width={500}
                        height={325} />
                </li>
            </ul>
        </main>
    );
};

export default ProjectsPage;