import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap/all";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleEndHover = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20 bg-zinc-900">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tighter'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-20">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleEndHover(0)}
            className="relative cardContainer w-1/2 h-[70vh]"
          >
            <h1 className="card absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl font-['Founders_Grotesk_Condensed'] leading-none tracking-tighter text-[#EB5B00]">
              {"LIGHT".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "0" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full bg-green-600 rounded-xl overflow-hidden">
              <img
                src="https://www.cssigniter.com/wp-content/uploads/2015/10/olsen_light_setup.jpg"
                alt=""
                className="w-full h-full bg-cover"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleEndHover(1)}
            className="relative cardContainer w-1/2 h-[70vh]"
          >
            <h1 className=" card absolute  flex  overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl font-['Founders_Grotesk_Condensed'] leading-none tracking-tighter text-[#EB5B00]">
              {"NIGHT".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "0" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full bg-green-600 rounded-xl overflow-hidden">
              <img
                src="https://miro.medium.com/v2/resize:fit:1159/1*KpQ60ETrB9WPAcWiCCjNig.jpeg"
                alt=""
                className="w-full h-full bg-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
