import React from 'react'
import bookimg from '../assets/booking.jpg'
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6"
import { motion } from 'framer-motion';
import { FadeUp } from '../Components/Hero/Hero';

const Reservation = () => {
  return (
    
    <>
    <div className="">
      <img className='w-[100%] h-[43.5rem]' 
      src={bookimg} alt="" />
          <div className="absolute  flex flex-col items-center justify-center text-center mt-[10rem] -inset-12 text-text_primary bg-black/30" >
          <h2 className="py-10 font-semibold mr-80 text-8xl">
          <IoCall />   Book a Table͂
          </h2>
         <motion.div
         variants={FadeUp(0.6)} 
          initial="initial"
          animate="animate" 
         className="flex justify-around py-10 text-4xl font-semibold text-white gap-36 mb-28">
          <p >  <FaLocationDot />Galle Branch <span className='grid'>- 091-2245357</span></p>
          <p > <FaLocationDot /> Ambalangoda Branch  <span className='grid'>- 071-1567200</span></p>
          <p><FaLocationDot />Mathara Branch  <span className='grid'>- 091-2224567</span ></p>
         </motion.div>
          </div>
    </div>
    </>
  )
}

export default Reservation