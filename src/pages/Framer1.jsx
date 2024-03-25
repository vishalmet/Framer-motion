import React from "react";
import { motion } from "framer-motion";
import Menus from "./Menus";

const Framer1 = () => {
  return (
    <div className="">
      <Menus />
    <div className=" bg-red-400 h-full flex justify-center overflow-hidden pb-16">
      <motion.div
        className=" text-black text-5xl font-bold"
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        Welcome!
      </motion.div>
      <motion.div
        className=" text-black text-5xl font-bold pt-44"
        animate={{ x: -125 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        Welcome!
      </motion.div>
      <motion.div
        className=" h-30 w-30 bg-blue-400"
        initial={{ scale: 0 }}
        animate={{ scale: 6, rotate: 360 }}
        transition={{ duration: 4 }}
      />
    </div>
    </div>
  );
};

export default Framer1;
