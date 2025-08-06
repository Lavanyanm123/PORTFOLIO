import React from 'react';
import Particles from 'react-tsparticles';

const TechBackground = () => (
  <Particles
    id="tsparticles"
    options={{
      fullScreen: { enable: true, zIndex: -1 },
      background: { color: "#0d1117" },
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#00ffea" },
        links: { enable: true, color: "#00ffea", distance: 150 },
        move: { enable: true, speed: 1 },
        size: { value: 2 },
        opacity: { value: 0.5 },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 100 } },
      },
    }}
  />
);

export default TechBackground;