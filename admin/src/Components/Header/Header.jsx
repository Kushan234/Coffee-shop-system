import React from 'react'
import logo from '../../../../frontend/src/assets/logo-main.png'




const Header = () => {


    const NavLinks =[
        {
            title: "Dashboard",
            path: "/dashboard"
        },
        {
            title: "Add Products",
            path: "/addProduct"
        },
        {
            title: "View Products",
            path: "/viewProduct"
        },
       
        
    ];

    
  return (
    <div className='w-auto h-28 bg-primary'>
        <div className="flex items-center justify-around md:justify-evenly">
            <img className='h-32 mb-3 text-white cursor-pointer w-44 md:w-32 sm:w-24'
            style={{ filter: 'brightness(0) saturate(100%) invert(90%)' }}
            src={logo} alt="" />
            
            <div className="hidden lg:block">
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
                    
           
                    <button
                    onClick={() => {
                        localStorage.removeItem("isAuthenticated");
                        window.location.href = "/";
                    }}
                    className="w-32 h-12 mb-2 border-solid outline-double outline-amber-200 hover:bg-amber-900"
                    >
                    Logout
                    </button>
                </ul>
             </div>
        </div>
    </div>
  )
}

export default Header