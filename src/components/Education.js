import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const Education = () => {
  const [revealed, setRevealed] = useState([false, false, false]);

  const educationData = [
    {
      institution: 'Malnad College of Engineering, Hassan',
      degree: 'B.E. in Computer Science & Engineering',
      period: 'Currently in 6th Semester',
      grade: 'CGPA: 8.7',
      icon: '🎓'
    },
    {
      institution: 'Sri Adichunchanagiri PU College, Arsikere',
      degree: '12th Grade (PUC)',
      period: 'Completed',
      grade: '97.5%',
      icon: '📚'
    },
    {
      institution: 'Sri Adichunchanagiri Eng Med High School, Arsikere',
      degree: '10th Grade',
      period: 'Completed',
      grade: '92.16%',
      icon: '🏫'
    }
  ];

  const revealEducation = (index) => {
    setRevealed(prev => {
      const newRevealed = [...prev];
      newRevealed[index] = true;
      return newRevealed;
    });
  };

  return (
    <div className="container my-5 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-5"
      >
        <h2 className="text-warning">Education Timeline</h2>
        <p className="fs-5">Click on each education card to reveal details!</p>
      </motion.div>

      <div className="row justify-content-center">
        {educationData.map((edu, index) => (
          <div key={index} className="col-12 col-md-4 mb-4">
            <motion.div
              className="card h-100 shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              style={{ cursor: 'pointer' }}
              onClick={() => !revealed[index] && revealEducation(index)}
            >
              <div className="card-body text-center">
                <div className="display-4 mb-3">{edu.icon}</div>
                
                {!revealed[index] ? (
                  <div>
                    <h5 className="card-title">Click to Reveal</h5>
                    <p className="text-muted">Education #{index + 1}</p>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h5 className="card-title">{edu.institution}</h5>
                    <h6 className="card-subtitle mb-2 text-primary">{edu.degree}</h6>
                    <p className="card-text">
                      <strong>Period:</strong> {edu.period}<br/>
                      <strong>Grade:</strong> {edu.grade}
                    </p>
                    <span className="badge bg-success">Revealed! ✨</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {revealed.every(Boolean) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-4"
        >
          <span className="badge bg-info fs-6">🎉 All education details revealed!</span>
        </motion.div>
      )}
    </div>
  );
};

export default Education;