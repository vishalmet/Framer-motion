import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Menus = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close the menu after clicking on a menu item
  };

  return (
    <div className=" bg-transparent backdrop-filter backdrop-blur-lg backdrop-opacity-20 z-50 w-full fixed font-serif ">
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
              className=" px-4 py-2 rounded- hover:cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleMenuItemClick('text-animation-section')}
            >
              Text animation
            </motion.li>
            <motion.li
              className=" px-4 py-2 rounded-md hover:cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleMenuItemClick('hover-and-tap-section')}
            >
              Hover and tap
            </motion.li>
            <motion.li
              className=" px-4 py-2 rounded-md hover:cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleMenuItemClick('menu-item-3-section')}
            >
              Menu Item 3
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Menus;
