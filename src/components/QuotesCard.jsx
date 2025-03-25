import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa'; // Install react-icons if you haven't: npm install react-icons

const QuotesCard = ({ quote }) => {
  return (
    <motion.div 
      className='quote-card'
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ 
        textAlign: "center", 
        padding: "20px", 
        border: "1px solid pink", 
        borderRadius: "10px" 
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaHeart color="red" size={30} />
      </motion.div>
      <h2>{quote}</h2>
    </motion.div>
  );
};

export default QuotesCard;
