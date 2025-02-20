import React, { useState } from 'react';
import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/kevinRushProfile.png";
import resumeManv from "../assets/resumeManv.pdf";
import { motion } from 'framer-motion';
import coder from "../assets/CODER.gif"
import manlaptop from "../assets/manlaptop.gif"



const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }

})

const Hero = () => {
    const [showPopup, setShowPopup] = useState(false); // State to toggle the popup visibility

    const downloadBtn = () => {
        const link = document.createElement('a');
        link.href = resumeManv; // Use actual file path
        link.download = 'manvenderMernStack.pdf'; // Specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const togglePopup = () => {
        setShowPopup(!showPopup); // Toggle visibility of the popup
    };
    return (
        <>
            <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
                <div className='flex flex-wrap'>
                    {/* Description */}
                    <div className='w-full lg:w-1/2'>
                        <div className='flex flex-col items-center lg:items-start'>
                            <motion.h1
                                variants={container(0)}
                                initial="hidden"
                                animate="visible"
                                className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Manvender Singh</motion.h1>
                            <motion.span
                                variants={container(0.5)}
                                initial="hidden"
                                animate="visible"
                                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                                MERN Stack Developer
                            </motion.span >
                            <motion.p
                               variants={container(1)}
                               initial="hidden"
                               animate="visible"
                            className='my-2 max-w-xl py6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                        </div>
                        <motion.button
                           variants={container(1)}
                           initial="hidden"
                           animate="visible"
                            onClick={downloadBtn}
                            className='my-5 mx-10 border-1 hover:text-black hover:bg-white rounded-3xl w-30 h-10'>
                            Download CV
                        </motion.button>
                        <motion.button
                           variants={container(1)}
                           initial="hidden"
                           animate="visible"
                            onClick={togglePopup}
                            className='my-5 mx-10 border-1 hover:text-black hover:bg-white rounded-3xl w-30 h-10'>
                            Contact Me
                        </motion.button>
                    </div>

                    {/* Images */}
                    <div className='w-full lg:w-1/2 lg:p-8'>
                        <div className='flex justify-center'>
                            <motion.img
                            initial={{x:100 ,opacity:0}}
                            animate={{x:0 , opacity:1}}
                            transition={{duration:1, delay:1.2}}
                            className='w-lg h-64  rounded-4xl m-24' src={manlaptop} alt="Manvender Singh" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Popup */}
            {showPopup && (

                <div className="fixed bg-[#15151599]  inset-0 flex items-center justify-center bg bg-opacity-75">
                    <div className="bg-[#151515cf] p-8 rounded-lg shadow-lg w-full sm:w-96">

                        <h2 className="text-2xl font-semibold text-white text-center">Contact Me</h2>
                        <form className="space-y-6">
                            {/* Name */}
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-lg font-medium text-gray-300">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your Full Name"
                                    className="mt-2 p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-lg font-medium text-gray-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Your Email Address"
                                    className="mt-2 p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-lg font-medium text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    placeholder="Your Message"
                                    className="mt-2 p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                                    Send Message
                                </button>
                            </div>
                        </form>
                        <button
                            onClick={togglePopup}
                            className="fixed top-2 right-2 text-white text-xl hover:bg-gray-600 p-2 rounded-full">
                            ×
                        </button>

                    </div>
                </div>
            )}
        </>
    );
};

export default Hero;
