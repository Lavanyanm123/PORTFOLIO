import React from 'react';
import Hero from './components/Hero';
import PersonalDetails from './components/PersonalDetails';
import TechBackground from './components/TechBackground';

function App() {
  return (
    <div>
      <TechBackground />
      <Hero />
      <PersonalDetails />
    </div>
  );
}

export default App;