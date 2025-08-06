import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

// This is your About Me section
const AboutMe = () => {
  // This keeps track of whether the user answered the quiz correctly
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  // This function runs when the user clicks an answer
  const handleAnswer = (answer) => {
    if (answer === 'Java') {
      setIsCorrect(true); // Correct answer!
    } else {
      setIsCorrect(false); // Wrong answer
    }
    setAnswered(true);
  };

  return (
    <div className="container my-5 text-white"> {/* Added text-white for bright text */}
      {/* Animated fade-in for the About Me text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-4"
      >
        <h2>About Me</h2>
        <p>
          Hi! I’m Lavanya, a self-driven and meticulous BE student skilled at JAVA programming, web development, and problem solving. I love building cool projects and learning new things!
        </p>
      </motion.div>

      {/* Simple quiz game */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="p-4 rounded shadow-sm text-dark"
        style={{ backgroundColor: '#fffbe6' }} // Light yellow for contrast
      >
        <h5>Game: Can you guess?</h5>
        <p>Which programming language does I like the most?</p>
        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-outline-primary" onClick={() => handleAnswer('Python')}>Python</button>
          <button className="btn btn-outline-primary" onClick={() => handleAnswer('Java')}>Java</button>
          <button className="btn btn-outline-primary" onClick={() => handleAnswer('JavaScript')}>JavaScript</button>
        </div>
        {answered && (
          <div className="mt-3">
            {isCorrect ? (
              <span className="badge bg-success">🎉 Correct! Java is mine favorite.</span>
            ) : (
              <span className="badge bg-danger">Oops! Try again or check the About Me above.</span>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AboutMe;