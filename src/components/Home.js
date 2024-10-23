// Home.js
import React from 'react';
import './Home.css'; 
import backgroundImage from '../assets/green.png';
import homeImage from '../assets/nin.jpg';

const Home = () => {
  return (
    <section
      id="home"
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      {/* Main Content Section */}
      <div className="home-content">
        {/* Image Section */}
        <div className="image-container">
          <img
            src={homeImage}
            alt="A web developer working on a project"
            className="header-image"
            style={{
              maxWidth: '100%',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>

        {/* Text Section */}
        <header className="home-header">
          <h2 className="greeting">Hi!</h2>
          <h1 className="welcome-title">Welcome to My Portfolio</h1>
          <p className="introduction">
            I'm <strong>Janine Sarcia</strong>, an IT student at the <strong>Western Institute of Technology</strong>.
          </p>
        </header>
      </div>
    </section>
  );
};

export default Home;

