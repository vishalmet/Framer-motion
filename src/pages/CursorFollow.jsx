import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CursorFollow = () => {
  // State to store the cursor position relative to the component
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Function to update cursor position on mouse move
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;
    setCursorPosition({ x: offsetX, y: offsetY });
  };

  return (
    <div className=' bg-emerald-400 overflow-hidden'
      style={{ width: '100vw', height: '100vh', position: 'relative' }}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        style={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          backgroundColor: 'white',
          position: 'absolute',
          top: cursorPosition.y - 25,
          left: cursorPosition.x - 25,
        }}
        animate={{ scale: 1.2 }} // Add spring animation
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      />
    </div>
  );
};

export default CursorFollow;
