import React from 'react';
import Hero from './components/Hero';
import PersonalDetails from './components/PersonalDetails';
import TechBackground from './components/TechBackground';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <TechBackground />
      <Hero />
      <PersonalDetails />
      <AboutMe />
    </div>
  );
}

export default App;