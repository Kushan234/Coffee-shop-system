import React from 'react'
import banner from '../../assets/Aboutbanner1.jpg'
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom'
import  About  from '../../Pages/About'
import { motion } from 'framer-motion';
import { FadeUp } from '../Hero/Hero';

const AboutBanner = () => {
  return (
    <div className=''>
           <div className="relative w-full h-[45rem]">
               <img className='object-cover w-full h-[80%] ' 
                src={banner} alt="" />
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center mb-36 text-text_primary bg-black/20">
       
       <motion.h2
       variants={FadeUp(0.6)} 
            initial="initial"
            animate="animate"  
        className="text-6xl font-bold ">Our Story</motion.h2>
        
       <motion.p 
       variants={FadeUp(0.5)} 
            initial="initial"
            animate="animate" 
       className="mt-3 text-xl tracking-wide">The Birth Of Our Cafe</motion.p>
       
       <Link to='/about'>
       <motion.button
       variants={FadeUp(0.4)} 
            initial="initial"
            animate="animate" 
        className='flex justify-center w-48 h-12 p-3 text-center hover:bg-amber-900 brder-solid bg-white/5 mt-7 outline-double outline-amber-200'>
       Explore More <FaArrowCircleRight className='mt-1 ml-2 '/></motion.button></Link>
     </div>
           </div>
       </div>
  )
}

export default AboutBanner