import React from 'react'
import logo from '../../assets/logo-main.png'
import { FaCoffee, FaWifi, FaLeaf, FaHamburger, FaCarSide } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import {  FaSquareWhatsapp } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {

    const branches =[
        {
            branch:"Galle",
            street: "No.40 Galle Rd, Kaluwella",
            Tel: "091-2245357",
        },
        {
          branch:"Ambalangoda",
          street: "New Street Galle Rd, Ambalangoda ",
          Tel: "071-1567200",
       },
       {
         branch:"Mathara",
        street: "No.56, St. Thomas Road, Matara",
        Tel: "091-2224567",
       }
    ];
    const services =[
      {
        icon:<FaCoffee />,
        title:"Coffee & Beverages",
      },
      {
        icon:<FaHamburger />,
         title:"Food & Snacks",
     },
     {
      icon:<FaWifi />,
      title:"WiFi & Workspace",
     },
     {
      icon: <FaCarSide />,
      title:"Drive-Thru & Takeaway",
     },
     {
      icon: <FaLeaf />,
      title:"Eco-Friendly Initiatives",
      },
  ];


   
  return (
    <>
    <div className=" bg-footer_Color">
        <img className='items-center w-52 h-52 justify-content ml-[40rem] '
          src={logo} alt="" />
        <div className="grid grid-cols-4 px-32 ">
            <div className="mb-16">
                <h1 className='mb-5 text-2xl font-semibold text-text_primary'>BRANCHES</h1>
                {
                  branches.map((branch)=>(
                   <div key={branch} className="">
                     <h2 className="text-xl font-semibold text-text_primary">{branch.branch}</h2>
                     <p className='text-sm font-semibold text-secondary'>{branch.street}</p>
                     <p className='text-sm font-semibold text-secondary'>{branch.Tel}</p>
                   </div>
                  ))
                }
            </div>
            <div className="">
            <h1 className='mb-5 text-2xl font-semibold text-text_primary'>SERVICES</h1>
            {
              services.map((service, index)=>(
                <div key={ index } className="flex gap-3 py-2 text-amber-900">
                  {service.icon}
                  <h3 className='text-lg font-semibold text-text_primary'>{service.title}</h3>
                </div>
              ))
            }
            </div>
            
            <div className="">
              <h1 className='mb-5 text-2xl font-semibold text-text_primary'>WORKING HOURS</h1>
              <p className=' text-secondary'>
              <span className='mb-3 text-lg text-text_primary'>Monday to Friday</span><br />
              9.00am - 10.30pm
                <br />        
              <span className='text-lg text-text_primary'>Saturday</span><br />
              9.30am - 10.30pm
              <br />        
              <span className='text-lg text-text_primary'>Sunday</span><br />
              9.30am - 11.00pm
                        
              </p>
            </div>

            <div className="">
              <h1 className='mb-5 text-2xl font-semibold text-text_primary'>STAY CONNECT WITH US</h1>
              <input
              className='w-[100%] h-8 px-2 border border-black rounded-lg outline-none placeholder:text-secondary bg-text_primary'
               type="text" name="" id="" 
              placeholder='Enter your Email' />
           <div className="py-5 text-text_primary">
           <FaFacebook className='w-6 h-6 mb-3 '/>
             <FaSquareWhatsapp className='w-6 h-6 mb-3'/>
             <RiInstagramFill className='w-6 h-6 mb-3'/>
             <FaYoutube className='w-6 h-6 mb-3'/>
           </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer