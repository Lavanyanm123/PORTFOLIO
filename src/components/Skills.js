import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

// List your skills here
const allSkills = [
  'Java',
  'Python',
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Node.js',
  'MongoDB',
  'SQL',
  'Figma',
];

const Skills = () => {
  // This keeps track of which skills are revealed
  const [revealedSkills, setRevealedSkills] = useState([]);
  // This keeps track of which skills are left to reveal
  const [remainingSkills, setRemainingSkills] = useState(allSkills);

  // This function runs when you click the button
  const revealSkill = () => {
    if (remainingSkills.length === 0) return;
    // Pick a random skill from the remaining ones
    const randomIndex = Math.floor(Math.random() * remainingSkills.length);
    const skill = remainingSkills[randomIndex];
    // Add it to revealedSkills
    setRevealedSkills([...revealedSkills, skill]);
    // Remove it from remainingSkills
    setRemainingSkills(remainingSkills.filter((s, i) => i !== randomIndex));
  };

  return (
    <div className="container my-5 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-4"
      >
        <h2 className="text-center mb-4 text-warning">My Skills Game</h2>
        <p className="text-center">Click the button to reveal all my skill!</p>
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">
          {revealedSkills.map((skill, idx) => (
            <motion.div
              key={skill}
              className="badge bg-info text-dark fs-5"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
        {remainingSkills.length > 0 ? (
          <div className="text-center">
            <button className="btn btn-primary" onClick={revealSkill}>
              Reveal Next Skill
            </button>
          </div>
        ) : (
          <div className="text-center mt-3">
            <span className="badge bg-success fs-5">🎉 All skills revealed!</span>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Skills;