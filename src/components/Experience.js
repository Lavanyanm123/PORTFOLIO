import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const Experience = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [revealedCerts, setRevealedCerts] = useState([false, false, false, false]);

  const experienceData = [
    {
      title: '1st Place – Silofortune × Malnad Tech Innovators Hackathon 2025',
      description: 'Created a dynamic UI/UX prototype in Figma with animations and interactive elements.',
      icon: '🏆',
      color: 'success'
    },
    {
      title: 'National Level Competition - IUCCE',
      description: 'Participated at national level competition conducted by IUCCE. Enhanced public speaking, articulation, and confidence on a competitive platform.',
      icon: '🌍',
      color: 'info'
    }
  ];

  const certifications = [
    {
      name: 'JAVA Programming and System Design',
      issuer: 'INEURON',
      icon: '☕',
      color: 'primary'
    },
    {
      name: 'Backend Development',
      issuer: 'PWSKILLS',
      icon: '⚙️',
      color: 'success'
    },
    {
      name: 'Web Programming',
      issuer: 'IUCEE',
      icon: '🌐',
      color: 'info'
    },
    {
      name: 'No SQL Database',
      issuer: 'INFOSYS',
      icon: '🗄️',
      color: 'warning'
    }
  ];

  const revealCertification = (index) => {
    setRevealedCerts(prev => {
      const newRevealed = [...prev];
      newRevealed[index] = true;
      return newRevealed;
    });
  };

  return (
    <div className="container my-5 text-white">
      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-5"
      >
        <h2 className="text-info">Experience & Achievements</h2>
        <p className="fs-5">Click on each card to see more details!</p>
      </motion.div>

      <div className="row justify-content-center mb-5">
        {experienceData.map((exp, index) => (
          <div key={index} className="col-12 col-lg-6 mb-4">
            <motion.div
              className={`card h-100 shadow-lg border-${exp.color}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              <div className="card-body text-center">
                <div className="display-4 mb-3">{exp.icon}</div>
                <h5 className="card-title">{exp.title}</h5>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeCard === index ? 'auto' : 0,
                    opacity: activeCard === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="card-text mt-3">
                    {exp.description}
                  </p>
                  <span className={`badge bg-${exp.color} text-dark`}>
                    {activeCard === index ? '✓ Active' : 'Click to expand'}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mb-5"
      >
        <h2 className="text-success">My Certifications</h2>
        <p className="fs-5">Click each certification to reveal details!</p>
      </motion.div>

      <div className="row justify-content-center">
        {certifications.map((cert, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
            <motion.div
              className="card h-100 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              style={{ cursor: 'pointer' }}
              onClick={() => !revealedCerts[index] && revealCertification(index)}
            >
              <div className="card-body text-center">
                <div className="display-4 mb-3">{cert.icon}</div>
                
                {!revealedCerts[index] ? (
                  <div>
                    <h6 className="card-title">Click to Reveal</h6>
                    <p className="text-muted">Certification #{index + 1}</p>
                    
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h6 className="card-title">{cert.name}</h6>
                    <p className="card-text">
                      <strong>Issued by:</strong><br/>
                      {cert.issuer}
                    </p>
                    <span className={`badge bg-${cert.color} text-white`}>
                      ✓ Certified
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {revealedCerts.every(Boolean) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-4"
        >
          <span className="badge bg-success fs-5">🎉 All certifications revealed!</span>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-4"
      >
        <p className="text-warning fs-5">
          <strong>💡 Tip: Click on any card to expand and see more details!</strong>
        </p>
      </motion.div>
    </div>
  );
};

export default Experience;