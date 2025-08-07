import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [foundContacts, setFoundContacts] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [showAllContacts, setShowAllContacts] = useState(false);

  const contactInfo = [
    {
      type: 'Email',
      value: 'lavanyamahesh2003@gmail.com',
      icon: '📧',
      color: 'primary'
    },
    {
      type: 'GitHub',
      value: 'github.com/lavanyanm123',
      link: 'https://github.com/lavanyanm123',
      icon: '🐙',
      color: 'dark'
    },
    {
      type: 'Location',
      value: 'Arsikere, Karnataka, India',
      icon: '📍',
      color: 'success'
    }
  ];

  const dummyCards = [
    { id: 'dummy1', content: '❓', isContact: false },
    { id: 'dummy2', content: '❓', isContact: false },
    { id: 'dummy3', content: '❓', isContact: false }
  ];

  const initializeGame = () => {
    // Create 6 cards: 3 contacts + 3 dummies
    const allCards = [
      ...contactInfo.map((contact, index) => ({
        id: `contact${index}`,
        content: contact,
        isContact: true
      })),
      ...dummyCards
    ];
    
    // Shuffle the cards
    const shuffled = allCards.sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlippedCards([]);
    setFoundContacts([]);
    setGameStarted(true);
    setShowAllContacts(false);
  };

  const handleCardClick = (cardId) => {
    if (flippedCards.includes(cardId) || foundContacts.includes(cardId)) {
      return; // Card already flipped or found
    }

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    // Check if this is a contact card
    const card = cards.find(c => c.id === cardId);
    if (card && card.isContact) {
      setFoundContacts([...foundContacts, cardId]);
      
      // Check if all contacts are found
      if (foundContacts.length + 1 === contactInfo.length) {
        setTimeout(() => {
          setShowAllContacts(true);
        }, 1000);
      }
    }

    // Auto-flip back dummy cards after 1 second
    if (card && !card.isContact) {
      setTimeout(() => {
        setFlippedCards(prev => prev.filter(id => id !== cardId));
      }, 1000);
    }
  };

  const getCardContent = (cardId) => {
    const card = cards.find(c => c.id === cardId);
    if (!card) return '❓';
    
    if (card.isContact) {
      return card.content;
    } else {
      return card.content;
    }
  };

  const isCardFlipped = (cardId) => {
    return flippedCards.includes(cardId) || foundContacts.includes(cardId);
  };

  const isCardFound = (cardId) => {
    return foundContacts.includes(cardId);
  };

  return (
    <div className="container my-5 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-5"
      >
        <h2 className="text-warning">Find My Contact</h2>
        <p className="fs-5">Memory Game: Find all 3 contact cards to unlock my details!</p>
      </motion.div>

      {!gameStarted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="card bg-dark border-warning p-5">
            <h3 className="text-warning mb-4">🎮 Memory Game</h3>
            <p className="mb-4">Click on cards to find my 3 contact details. Remember what you see!</p>
            <motion.button
              className="btn btn-warning btn-lg"
              onClick={initializeGame}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Game 🚀
            </motion.button>
          </div>
        </motion.div>
      ) : !showAllContacts ? (
        <div className="text-center">
          <div className="mb-4">
            <span className="badge bg-info fs-6 me-2">Found: {foundContacts.length}/3</span>
            <span className="badge bg-success fs-6">Progress: {Math.round((foundContacts.length / 3) * 100)}%</span>
          </div>

          <div className="row justify-content-center">
            {cards.map((card, index) => (
              <div key={card.id} className="col-4 col-md-2 mb-3">
                <motion.div
                  className="card h-100"
                  style={{ 
                    cursor: 'pointer',
                    backgroundColor: isCardFound(card.id) ? '#28a745' : '#343a40',
                    border: isCardFound(card.id) ? '3px solid #28a745' : '3px solid #6c757d'
                  }}
                  onClick={() => handleCardClick(card.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={isCardFlipped(card.id) ? { rotateY: 180 } : { rotateY: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-body d-flex align-items-center justify-content-center">
                    <div className="display-6">
                      {isCardFlipped(card.id) ? (
                        card.isContact ? (
                          <span className="text-white">{getCardContent(card.id).icon}</span>
                        ) : (
                          <span className="text-danger">{getCardContent(card.id)}</span>
                        )
                      ) : (
                        <span className="text-muted">❓</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <small className="text-muted">💡 Tip: Remember the positions of contact cards!</small>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="card bg-success border-success p-4 mb-4">
            <h3 className="text-white">�� Congratulations!</h3>
            <p className="text-white">You've found all my contact information!</p>
          </div>

          <div className="row justify-content-center">
            {contactInfo.map((contact, index) => (
              <div key={index} className="col-12 col-md-4 mb-4">
                <motion.div
                  className="card h-100 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="card-body text-center">
                    <div className="display-4 mb-3">{contact.icon}</div>
                    <h5 className="card-title">{contact.type}</h5>
                    {contact.link ? (
                      <a
                        href={contact.link}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="card-text">{contact.value}</p>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <motion.button
            className="btn btn-outline-warning mt-3"
            onClick={initializeGame}
            whileHover={{ scale: 1.05 }}
          >
            Play Again ��
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;