import React from "react";
import { motion } from "framer-motion";

const Solids = () => {
  return (
    <div className=" ">
      <div className=" h-screen bg-blue-400 flex justify-center items-center ">
        <motion.div
          className=" h-32 w-32 bg-slate-700 items-center"
          initial={{ scale: 0 }}
          animate={{ scale: 3, rotate: 360 }}
          transition={{ duration: 4 }}
          whileHover={{
            scale: 4,
            transition: { duration: 1 },
          }}
        >
          {" "}
          <p className=" flex justify-center text-white font-serif pt-[40%]">
            Hover me!
          </p>
        </motion.div>
      </div>
      <div className=" h-screen bg-blue-400 flex justify-center ">
        <motion.div
          className=" h-32 w-32 bg-slate-700 items-center"
          initial={{ scale: 0 }}
          animate={{ scale: 3, rotate: 360 }}
          transition={{ duration: 4 }}
          whileTap={{
            scale: 7,
          }}
        >
          {" "}
          <p className=" flex justify-center text-white font-serif pt-[40%]">
            Tap me!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Solids;
