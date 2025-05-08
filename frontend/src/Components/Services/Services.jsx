import React from 'react'
import { FaCoffee, FaWifi, FaLeaf, FaHamburger, FaCarSide } from "react-icons/fa";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { motion } from 'framer-motion'


export const sideLeft = (delay)=>{
    return{
        initial:{
            opacity:0,
            x:100,
        },
        animate:{
            opacity:1,
            x:0,
            transition:0.1,
            delay:delay,
            ease:"easeInOut"
        },
    }
}


const Services = () => {

    const ServiceData =[
        {
            id:1,
            title:"Coffee & Beverages",
            icon:<FaCoffee />,
            
        },
        {
            id:2,
            title:"Food & Snacks",
            icon:<FaHamburger />,
            
        },
        {
            id:3,
            title:"WiFi & Workspace",
            icon:<FaWifi />,
            
        },
        {
            id:4,
            title:"Drive-Thru & Takeaway",
            icon: <FaCarSide />,
            
        },
        {
            id:5,
            title:"Eco-Friendly Initiatives",
            icon: <FaLeaf />,
            
        }
     
        
    ]

    
  return (
    <>
    <div className="p-10 mt-10 mb-12">
        <div className="">
            <p className='justify-center text-lg font-thin text-center text-gray-500 mr-52'>Hot Coffee :</p>
            <h1 className='justify-center text-3xl font-semibold text-center text-gray-800'>Services We Provided</h1>
            <hr className='items-center justify-center ml-[33rem] w-96 text-text_primary mt-2'/>
        </div>

        <div className="p-14">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    loop={true}
                    grabCursor={true}
                >
                    {ServiceData.map((service) => (
                        <SwiperSlide key={service.id}>
                            
                            <motion.div  
                             variants={sideLeft(service.delay)}
                             initial ="initial"
                             whileInView={"animate"}
                             viewport={{once:true}}
                            className="bg-[#a06f37] text-text_primary rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7
                         hover:bg-primary hover:scale-110 hover:duration-300 hover:shadow-2xl h-52">
                                <div className="mb-2 text-5xl">{service.icon}</div>
                                <h1 className='px-3 text-lg font-semibold text-center'>{service.title}</h1>
                            </motion.div>
                            
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
    </div>
    </>
  )
}

export default Services