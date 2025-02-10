import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io5"
import { PiFileHtmlDuotone } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { animate, motion } from 'framer-motion';


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",

        }
    }
})


const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
          
             <motion.h1
               whileInView={{opacity:1,y:0}}
               initial={{opacity:0,y:-50}}
               transition={{duration:1.5}}
             className='my-20 text-center text-4xl'>The Skills <span className='text-neutral-500'>I Have</span></motion.h1>

            <div className="flex  flex-wrap items-center justify-center gap-4  ">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="flex gap-6 flex-wrap rounded-2xl border-neutral-800 p-4">
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                    > <RiReactjsLine className='text-7xl text-cyan-400' /></motion.div>
                    <motion.div
                        variants={iconVariants(1.5)}
                        initial="initial"
                        animate="animate"
                    ><IoLogoJavascript className='text-7xl text-amber-300' /></motion.div>
                    <motion.div
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"
                    ><PiFileHtmlDuotone className='text-7xl ' /></motion.div>
                    <motion.div
                        variants={iconVariants(1.5)}
                        initial="initial"
                        animate="animate"
                    ><RiTailwindCssFill className='text-7xl text-cyan-400' /></motion.div>
                  
                         <motion.div
                        variants={iconVariants(1)}
                        initial="initial"
                        animate="animate"
                    ><FaNode className='text-7xl text-green-400' /></motion.div>
                        <motion.div
                            variants={iconVariants(3)}
                            initial="initial"
                            animate="animate"
                        ><FaGithub className='text-7xl ' /></motion.div>
                        <motion.div
                            variants={iconVariants(2.5)}
                            initial="initial"
                            animate="animate"
                        ><SiExpress className='text-7xl text-cyan-400' /></motion.div>
                        <motion.div
                            variants={iconVariants(1)}
                            initial="initial"
                            animate="animate"
                        ><SiMongodb className='text-7xl text-green-400' /></motion.div>
                    
                </motion.div>
            </div>

        </div>
    )
}

export default Technologies
