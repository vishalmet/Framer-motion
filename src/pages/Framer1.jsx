import React from "react";
import { motion } from "framer-motion";
import Menus from "./Menus";
import Solids from "./Solids";
import CursorFollow from "./CursorFollow";

const Framer1 = () => {
  return (
    <div className=" bg-red-400 h-screen font-serif">
      <div id="text-animation-section" className="  overflow-hidden items-center">
        <motion.div
          className=" text-black text-2xl pt-32  font-bold h-auto"
          // animate={{ x: 100 }}
          initial={{ scale: 0 }}
          animate={{ scale: 3 }}
          transition={{ ease: "easeInOut", duration: 3 }}
        >
          <p className=" flex justify-center"> Text animation</p>
        </motion.div>
        <div className=" pt-44">
          <motion.div
            className=" text-black text-2xl font-medium"
            animate={{rotate: 360}}
            transition={{ ease: "easeOut", duration: 4 }}
          >
            <p className=" flex justify-center">Welcome!</p>
          </motion.div>
          <motion.div
            className=" text-black text-5xl font-medium pt-16"
            animate={{ x: -50 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <p className=" flex justify-center pb-32">
              This page is animated using Framer motion!
            </p>
          </motion.div>
        </div>
      </div>
      <div id="hover-and-tap-section" className="">
      <Solids />
      </div>
      <div id="menu-item-3-section" className="">
      <Menus />
      </div>
      <div id="menu-item-3-section" className="">
      <CursorFollow />  
      </div>
    </div>
  );
};

export default Framer1;
