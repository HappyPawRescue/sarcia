import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Project';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Skills/>
            <Contact />
        </div>
    );
};

export default App;

