import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".15" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] overflow-hidden">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap">
        <div className="flex">
          <motion.h1
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", duration: 10, repeat: Infinity }}
              className='text-[15vw] leading-none font-["Founders_Grotesk_Condensed"] -mb-[3vh] font-semibold uppercase overflow-hidden pr-20'
            >
              REACT ANGULAR NODE EXPRESS
            </motion.h1>
            <motion.h1
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", duration: 10, repeat: Infinity }}
              className='text-[15vw] leading-none font-["Founders_Grotesk_Condensed"] -mb-[3vh] font-semibold uppercase overflow-hidden pr-20'
            >
              REACT ANGULAR NODE EXPRESS
            </motion.h1>

        </div>
      </div>
    </div>
  );
}

export default Marquee;
