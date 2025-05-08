import React, { useState } from 'react'
import logo from '../../assets/logo-main.png'
import { TiShoppingCart } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from '../../Context/CartContext';
import { motion } from 'framer-motion';
import Services, { sideLeft } from '../Services/Services';

const Header = () => {

    const { user, setUser, setCart } = useCart(); 
    const navigate = useNavigate();


    const NavLinks =[
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About Us",
            path: "/About"
        },
        {
            title: "Menu",
            path: "/Menu"
        },
        {
            title: "Reservation",
            path: "/Reservation"
        },
        {
            title: "Contact Us",
            path: "/Contact"
        },
        {
            title: <TiShoppingCart  className='items-center justify-center h-12 w-14'/>,
            path: "/Cart"
        },
        
        
    ];

    const handleLogout = () => {
      const confirmLogout = window.confirm("Are you sure you want to log out?");
      if (confirmLogout) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("cart");
        setUser(null);
        setCart([]);
        navigate("/login");
      }
    };
    
  return (
    <div className='w-auto h-28 bg-primary'>
        <div className="flex items-center justify-evenly md:justify-evenly">
            <img className='h-32 mb-3 text-white cursor-pointer w-44 md:w-32 sm:w-24'
            style={{ filter: 'brightness(0) saturate(100%) invert(90%)' }}
            src={logo} alt="" />
            
            <motion.div
              variants={sideLeft(Services.delay)}
              initial ="initial"
              whileInView={"animate"}
              viewport={{once:true}}
             className="hidden lg:block">
                <ul className='flex gap-10 text-lg font-semibold text-text_primary'>
                    {
                        NavLinks.map((menu, index)=>(
                            <li key={index}>
                            <a className='relative inline-block px-3 py-2 hover:text-orange-300 group' href={menu.path}>
                             <div className="absolute bottom-0 hidden w-2 h-2 mt-2 -translate-x-1/2 rounded-full bg-secondary left-1/2 top-1/2 group-hover:block">
                             </div>{menu.title}</a>
                            </li>
                        ))
                    }
                    
             {user ? (
              <button
                onClick={handleLogout}
                className="w-32 h-12 mb-2 border-solid outline-double outline-amber-200 hover:bg-amber-900"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="w-32 h-12 mb-2 border-solid outline-double outline-amber-200 hover:bg-amber-900">
                  Login
                </button>
              </Link>
            )}
               
                </ul>
             </motion.div>
        </div>
    </div>
  )
}

export default Header