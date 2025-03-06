import React from 'react'
import musicPlayer from "../assets/musicPlayer.png"
import bubbleGame from "../assets/bubbleGame.png"
import jarvis from "../assets/jarvis.png"
import { motion } from 'framer-motion';


const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>Projects</motion.h1>





<div className="mb-8 flex flex-wrap  lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="w-full   lg:w-1/4">
          <img src={musicPlayer} width={150} height={150} className='mb-6 rounded' alt="" /></motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="w-full max-w-xl lg:w-3/4">
          <h4 className='mb-2 font-semibold'>Music Player </h4>
          <p className='mb-4 text-neutral-400  text-wrap'>Developed an interactive music player using HTML, CSS,and JavaScript,featuring dynamic song navigation, search, and play/pause controls.Enhancing user experience with smooth transitions between song playback and search results.</p>
          <button className=' mx-10 border-1 m-5 hover:text-black  hover: hover:bg-white rounded-3xl w-30 h-10'><a href="https://music-player-manv.vercel.app/"> Live Demo</a></button>
          <button className=' mx-10 border-1 bg-blue-500  hover: hover:bg-white hover:text-black rounded-3xl w-30 h-10'><a href="https://github.com/Manv8/music-player">Source</a> </button>
        </motion.div>

      </div>

      {/* jarvis */}

      <div className="mb-8 flex flex-wrap  lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="w-full   lg:w-1/4">
          <img src={jarvis} width={150} height={150} className='mb-6 mt-13 rounded' alt="" /></motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="w-full max-w-xl lg:w-3/4">
          <h4 className='mb-2 font-semibold'>Jarvis AI-Assistant</h4>
          <p className='mb-4 text-neutral-400  text-wrap'>Your JARVIS virtual assistant project is built using HTML, CSS, and JavaScript. It includes a user interface with a microphone button to capture voice commands and display responses dynamically. The CSS ensures a sleek, responsive design with animations for better user experience. The JavaScript integrates Web Speech API for speech recognition, processing voice commands, and responding accordingly. The assistant can recognize specific commands, display responses on the screen, and improve interactivity.</p>
          <button className=' mx-10 border-1 m-5  hover:text-black  hover: hover:bg-white rounded-3xl w-30 h-10'><a href="https://jarvis-by-manvender.vercel.app/"> Live Demo</a></button>
          <button className=' mx-10 border-1 bg-blue-500  hover: hover:bg-white hover:text-black rounded-3xl w-30 h-10'><a href="https://github.com/Manv8/jarvis"> Source </a></button>
        </motion.div>

        </div>
        {/* bubbleGame */}
        <div className="mb-8 flex flex-wrap  lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="w-full   lg:w-1/4">
          <img src={bubbleGame} width={150} height={150} className='mb-6 rounded' alt="" /></motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="w-full max-w-xl lg:w-3/4">
            <h4 className='mb-2 font-semibold'>Bubble Game</h4>
            <p className='mb-4 text-neutral-400  text-wrap'>This simple bubble-popping game. When the "startbtn" is clicked, the game begins by generating 119 bubbles, each with a random number between 0 and 9. A target number is also randomly generated and displayed in the #hitBox. The player clicks on a bubble, and if the number inside the bubble matches the target number, the score increases by 10 points.</p>
            <button className=' mx-10 border-1 m-5  hover:text-black  hover: hover:bg-white rounded-3xl w-30 h-10'><a href="https://bubble-game-manv.vercel.app/"> Live Demo</a></button>
            <button className=' mx-10 border-1 bg-blue-500  hover: hover:bg-white hover:text-black rounded-3xl w-30 h-10'><a href="https://github.com/Manv8/bubble-game"> Source </a></button>
          </motion.div>

        </div>


    




    </div>
  )
}

export default Projects
