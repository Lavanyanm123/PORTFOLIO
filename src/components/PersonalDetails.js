import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const details = [
  { label: 'Location', value: 'Arsikere, Karnataka, India' },
  { label: 'Email', value: 'lavanyamahesh2003@gmail.com' },
  { label: 'GitHub', value: 'github.com/lavanyanm123', link: 'https://github.com/lavanyanm123' },
];

const shuffledOrder = [2, 0, 1]; // Example shuffle order

const PersonalDetails = () => {
  const [revealed, setRevealed] = useState([false, false, false]);
  const [order] = useState(shuffledOrder);

  const handleReveal = (idx) => {
    setRevealed((prev) => {
      const newRevealed = [...prev];
      newRevealed[idx] = true;
      return newRevealed;
    });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4"  style={{ color: '#ff9800' }}>Personal Details Puzzle</h2>
      <div className="row justify-content-center">
        {order.map((detailIdx, i) => (
          <div key={i} className="col-10 col-md-3 mb-3">
            <motion.div
              className="card p-3  text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: revealed[i] ? 1 : 0.7, y: revealed[i] ? 0 : 50 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              style={{ cursor: revealed[i] ? 'default' : 'pointer', minHeight: 120 }}
              onClick={() => !revealed[i] && handleReveal(i)}
            >
              {revealed[i] ? (
                <>
                  <h5>{details[detailIdx].label}</h5>
                  {details[detailIdx].link ? (
                    <a href={details[detailIdx].link} target="_blank" rel="noopener noreferrer">
                      {details[detailIdx].value}
                    </a>
                  ) : (
                    <p>{details[detailIdx].value}</p>
                  )}
                </>
              ) : (
                <span role="img" aria-label="puzzle">🧩 Click to reveal</span>
              )}
            </motion.div>
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        {revealed.every(Boolean) && <span className="badge bg-success">All details revealed! 🎉</span>}
      </div>
    </div>
  );
};

export default PersonalDetails;