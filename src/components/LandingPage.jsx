import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowDownLong, FaVolumeHigh } from "react-icons/fa6";

function LandingPage() {
  return (
    <>
        <div data-scroll data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-2">
            <div className="textstructure mt-40 px-20">
                    {
                        ["We Create", "eye opening", "Websites"].map((text, index) => {
                            return <div className="masker  text-9xl font-['Founders_Grotesk_Condensed']" key={index}>
                                <div className="w-fit flex">
                                    {index===1 && ( <motion.div initial={{width:0}} animate={{width:"20vh"}} transition={{ease:[0.76, 0, 0.24, 1], duration:3}}className="mr-[1vw] w-[8vw] h-[6vw] rounded-md relative -bottom-[1vw] bg-red-500">
                                        <img   src="https://www.onlygfx.com/wp-content/uploads/2016/07/eye-logo-2.png" alt="" />
                                    </motion.div>
                                    )}
                                    <h1 className='uppercase text-[7.5vw] leading-[8vw] tracking-tighter font-medium' key={index}>{text}</h1>
                                </div>
                            </div>    
                        })
                    }
                
                <div className="border-t-[1px] border-zinc-800 mt-28 py-5 px-20 flex justify-betweem items-center gap-[160px]">
                    {
                        ["Personal Websites", "For public and private companies"].map((text, index) => {
                           return <p className="text-md font-light tracking-tight leading-none" key={index}>{text}</p>
                        })
                    }
                    <div className="start flex items-center gap-5 uppercase">
                        <div className="px-4 py-2 border-[1px] border-zinc-500 rounded-full font-light text-md capitalize uppercase">Get Started</div>
                        <div className="w-10 h-10 border-[1px] border-zinc-500 rounded-full flex items-center justify-center">
                            <span className='rotate-[-120deg]'>
                                <FaArrowDownLong />
                            </span>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LandingPage