// Projects.js
import './Project.css';
import React from 'react';

// Import images
import project1Image from '../assets/project01.png'; // Adjust the path as necessary
import project2Image from '../assets/project02.jpg'; // Adjust the path as necessary


const Projects = () => {
    const projectData = [
        {
            imageUrl: project1Image,
            title: 'Project 1',
            description: 'This project is part of prefinal examination using the figma.',
            technologies: 'Figma',
        },
        {
            imageUrl: project2Image,
            title: 'Project 2',
            description: 'A full stack web application using the MERN Stack (MongoDB, Express, React, and Node).',
            technologies: 'React, MongoDB, Node, JavaScript',
        },
        
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            <ul className="project-list">
                {projectData.map((project, index) => (
                    <li key={index} className="project-item">
                        <img 
                            src={project.imageUrl} 
                            alt={`Project ${index + 1}`} 
                            className="project-image" 
                        />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <p className="project-technologies">{project.technologies}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;




