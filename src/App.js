import React from 'react';
import Hero from './components/Hero';
import PersonalDetails from './components/PersonalDetails';
import TechBackground from './components/TechBackground';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

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
    </div>
  );
}

export default App;