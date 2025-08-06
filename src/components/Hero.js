// client/src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import myPhoto from '../assets/myPhoto.jpg';

const Hero = () => (
  <div className="container text-center py-5">
    <motion.img
      src={myPhoto}
      alt="Your Photo"
      className="rounded-circle mb-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ width: 300, height: 300, objectFit: 'cover' }}
    />
    <motion.h1
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Lavanya N M
    </motion.h1>
    <motion.h4
      className="text-secondary"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 1 }}
    >
      Software Engineer | MERN Developer
    </motion.h4>
  </div>
);

export default Hero;