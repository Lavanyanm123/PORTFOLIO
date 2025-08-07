import React from 'react';
import Hero from './components/Hero';
import PersonalDetails from './components/PersonalDetails';
import TechBackground from './components/TechBackground';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DownloadCV from './components/DownloadCV';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <TechBackground />
      <p className="text-center text-white fs-4 mt-4">
        Know about me by playing games below!
      </p>
      <Hero />
      <PersonalDetails />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <DownloadCV />
      <Contact />
    </div>
  );
}

export default App;