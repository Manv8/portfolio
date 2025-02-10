import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import mslogo1 from "../assets/mslogo.jpg"
import { FiMail } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <h4 className='text-3xl'>MS</h4>
      </div>
      <div className='m-8 flex items-center  justify-center gap-4 text-2xl'>
        <div> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=08manvender@gmail.com
"> <FiMail /> </a></div>
        <a href="https://www.linkedin.com/in/manvender-singh-1b2979299/
"> <FaLinkedin /></a>
        <div><a href="https://github.com/Manv8"> <FaGithub /></a></div>
        <div><a href="https://x.com/Manv_08"> <FaSquareXTwitter /></a></div>
      </div>
    </nav>
  )
}

export default Navbar
