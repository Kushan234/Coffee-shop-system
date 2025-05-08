import React from 'react'
import banner from '../../assets/banner1.webp'
import { motion } from 'framer-motion'

  export const FadeUp = (delay)=>{
        return{
            initial: {
                opacity: 0,
                y:50,
            },
            animate:{
                opacity:1,
                y:0,
                transition:{
                    type:"damping ",
                    stiffness:100,
                    duration:0.6,
                    delay:delay,
                    ease: "easeInOut"
                }
            }
        }
      }

const Hero = () => {
  
  return (
    <div className=''>
        <div className="relative w-full h-[28rem] md:h-[40rem] lg:h-[45rem]">
            <img className='object-cover w-full h-full ' 
             src={banner} alt="" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-text_primary bg-black/30 ">
    <motion.h2
     variants={FadeUp(0.6)} 
     initial="initial"
     animate="animate" 
    className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-5xl">Brewing Happiness, One Cup at a Time
    </motion.h2>
    
    <motion.p 
     variants={FadeUp(0.7)} 
     initial="initial"
     animate="animate" 
    className="mt-4 text-sm text-gray-200 sm:text-base md:text-lg">--EAT. DRINK. MEET. THINK.--
    </motion.p>
    
  </div>
        </div>
    </div>
  )
}

export default Hero