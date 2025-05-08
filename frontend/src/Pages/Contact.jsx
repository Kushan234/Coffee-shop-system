import React from 'react'
import banner from '../assets/banner2.jpg'
import { FaLocationDot } from "react-icons/fa6"

const Contact = () => {

  const locations = [
    {
      icon: <FaLocationDot />,
      location: "No.40 Galle Rd, Kaluwella",
    },
    {
      icon: <FaLocationDot />,
      location: "New Street Galle Rd, Ambalangoda "
    },
    {
      icon: <FaLocationDot />,
      location: "No.56, St. Thomas Road, Matara"
    }
  ]
  return (
   <>
   <div className="w-[100%]">
    <div className="p-0 m-0 text-white ">
      <img className='h-[52.5rem] w-[100%]' 
      src={banner} alt="" />
     <div className="absolute grid grid-cols-2 mt-[19rem] -inset-48 bg-black/40">
      <div className="p-24 mt-72 ml-60 text-text_primary">
      <h1 className='text-lg'>HOT-COFFEE</h1>
        <h3 className='text-3xl font-bold'>Our Locations:</h3>
         <div className="flex flex-col gap-5 py-10 font-semibol mr-14">
        {
          locations.map((location,index)=>(
            <div key={index} className="flex text-xl">{location.icon}
            <p className='absolute ml-6'>{location.location}</p>
            </div>
            
          ))
        }        
         </div>
      </div>
      <div className="mt-24 text-text_primary">
        <h3 className='text-xl font-semibold '>For online enquiries : </h3>
        <p className='text-lg '>your needs we provide. </p>

        
      <div className="bg-white w-[40rem] h-[32rem] mt-6 rounded-lg ">
        <div className="flex py-12 ml-10">
        <input className='w-64 px-3 border-2 rounded-md h-14 outline-4 placeholder:text-gray-500'  
        type="text" name="" id="" placeholder='First Name' />
        <input className='w-64 px-3 ml-8 border-2 rounded-md h-14 outline-4 placeholder:text-gray-500' 
         type="text" name="" id="" placeholder='Last Name'/>
        </div>
        
        <div className="grid ml-10">
          <input className='mb-12 border-2 rounded-md h-14 w-[91%] outline-4 px-3 placeholder:text-gray-500 ' 
          type="email" name="" id="" placeholder='Email Address'/>
          <textarea className='mb-4 border-2 rounded-md h-36 w-[91%] outline-4 px-3 placeholder:text-gray-500 ' 
          type="textarea" name="" id="" placeholder='Message'/>
          
        <button className='w-[91%] h-14 bg-primary mt-2 rounded-lg text-white font-semibold text-lg'
        type="submit">Submit</button>
        </div>
      
        
       
      </div>
      </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default Contact