import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Menus = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" bg-red-400 font-serif ">
    <div className=" flex justify-end  p-10">
    <div className=' '>
      <motion.button
        onClick={handleMenuClick}
        className="bg-black text-white px-4 py-2 rounded-md"
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </motion.button>

      <motion.ul
        className="mt-4 space-y-2 bg-gray-400 rounded-md h-fit w-fit"
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <motion.li
          className=" px-4 py-2 rounded-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          Text animation
        </motion.li>
        <motion.li
          className=" px-4 py-2 rounded-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          Hover and tap
        </motion.li>
        <motion.li
          className=" px-4 py-2 rounded-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
         <a href="">Menu Item 3</a>
        </motion.li>
      </motion.ul>
    </div>
    </div>
    </div>
  );
};

export default Menus;
