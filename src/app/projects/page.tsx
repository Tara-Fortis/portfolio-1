'use client';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
    {
        id: "empower-simcoe",
        title: "Empower Simcoe Prototype",
        subtitle: "Responsive Web Application",
        description: "Collaborated in an agile team environment to develop an accessible, responsive WordPress prototype tailored to strict client compliance and user-testing guidelines.",
        techStack: ["WordPress"],
        image: "/projects/empower-simcoe.png",
        liveLink: "https://loremipsum.io/"
    },
    {
        id: "polyglot",
        title: "Angular Tutorial",
        subtitle: "Use transloco to manage internationalization",
        description: "Angular Polyglot Tutorial: i18n with Transloco",
        techStack: ["Angular"],
        image: "/projects/polyglot.png",
        liveLink: "https://loremipsum.io/",
        githubLink: "https://github.com/Tara-Fortis/polyglot"
    },
    {
        id: "clothing-inventory",
        title: "Full-Stack Inventory Manager",
        subtitle: "MEAN Stack CRUD Application",
        description: "Retail management application featuring full CRUD capabilities and dynamic inventory tracking.",
        techStack: ["MongoDB", "Express.js", "Angular", "Node.js"],
        image: "/projects/inventory.png",
        liveLink: "https://mean-clothes-server.vercel.app/",
        githubLink: "https://github.com/Tara-Fortis/mean-clothes-server"
    },
    {
        id: "museum-xr",
        title: "MuseumXR",
        subtitle: "3D Virtual Museum Experience",
        description: "An immersive, one-room virtual museum featuring interactive 3D Greek statues with voice-over descriptions.",
        techStack: ["Babylon.js"],
        image: "/projects/museum-xr.png",
        liveLink: "https://tara-fortis.github.io/museumxr/",
        githubLink: "https://github.com/Tara-Fortis/museumxr"
    }
];

const ProjectsPage = () => {
    return (
        <main className="projects-container">
            <h1 className="page-title">Selected Work</h1>
            <p className="text-muted text-center mb-5" style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                A showcase of full-stack applications, an angular tutorial, and accessible design prototypes.
            </p>

            {/* Using your exact native CSS Grid rule here */}
            <ul className="project-grid">
                {projects.map((project) => (
                    <li key={project.id} className="project-card d-flex flex-column justify-content-between">
                        <div>
                            <div className="position-relative ratio ratio-16x9 mb-3 overflow-hidden rounded">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} screenshot`}
                                    fill
                                    priority={project.id === "empower-simcoe"}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <span className="text-primary small fw-bold text-uppercase mb-1 d-block">
                                {project.subtitle}
                            </span>
                            <h2 className="fw-bold mb-2 fs-5" style={{ color: 'var(--foreground)' }}>
                                {project.title}
                            </h2>
                            <p className="text-muted small">
                                {project.description}
                            </p>

                            {/* Tech Badges */}
                            <div className="d-flex flex-wrap gap-1 my-3">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="badge bg-secondary-subtle text-dark-emphasis rounded-pill px-2 py-1 small fw-normal">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons using your local button styles */}
                        <div className="d-flex gap-2 pt-2 mt-auto">
                            <a href={project.liveLink} target="_blank" rel="noreferrer" className="w-100">
                                <button className="w-100 d-inline-flex align-items-center justify-content-center gap-2">
                                    <FaExternalLinkAlt size={12} /> Live Demo
                                </button>
                            </a>
                            {project.githubLink && (
                                <a href={project.githubLink} target="_blank" rel="noreferrer" className="w-100">
                                    <button className="w-100 d-inline-flex align-items-center justify-content-center gap-2" style={{ background: 'transparent', border: '1px solid #5e4b56', color: '#5e4b56' }}>
                                        <FaGithub size={12} /> Code
                                    </button>
                                </a>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default ProjectsPage;