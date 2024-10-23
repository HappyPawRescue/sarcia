// src/components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'HTML', description: 'Proficient in creating structured and semantic HTML documents.' },
        { name: 'CSS', description: 'Experienced in styling web pages with CSS, including responsive designs.' },
        { name: 'JavaScript', description: 'Strong understanding of JavaScript and ES6 features for dynamic web applications.' },
        { name: 'React', description: 'Skilled in building user interfaces and components using React.' },
        { name: 'Node.js', description: 'Proficient in developing backend applications with Node.js.' }
    ];

    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        <strong>{skill.name}:</strong> {skill.description}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;

