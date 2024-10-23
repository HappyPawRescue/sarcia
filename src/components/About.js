import React from 'react';
import aboutImage from '../assets/nin.jpg';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-container">
            <img src={aboutImage} alt="A web developer working on a project" className="header-image" />
            <div className="about-content">
                <h2>About Me</h2>
                <p>Hi! I'm Janine Sarcia, an IT student with a deep interest in problem-solving and innovative technology solutions. Currently pursuing my degree at Western Institute of Technology.</p>
                <p>In my free time, I enjoy contributing to open-source projects and exploring new programming languages.</p>
            </div>
        </section>
    );
};

export default About;

