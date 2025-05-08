import React, { useEffect, useRef, useState } from 'react'
import menu from '../assets/banner7.jpg'
import images1 from '../assets/category1.png'
import images2 from '../assets/category2.webp'
import images3 from '../assets/category3.jpg'
import images4 from '../assets/category4.jpg'
import images5 from '../assets/category5.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import MenuItems from './MenuItems'
import { menuItems } from '../Data/items'



const Menu = () => {

  const [selectItem, setSelectItem] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const menuRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/products/getAllProduct");
        const data = await res.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Failed to fetch menu items", error);
      }
    };

    fetchMenuItems();
  }, []);

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectItem ? item.category === selectItem : true;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const handleCategoryClick = (title) => {
    setSelectItem(title);

    setTimeout(() => {
      menuRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  
  
   const category =[
          {
              id:1,
              title:"Coffee-Drinks",
              images: images1
              
          },
          {
              id:2,
              title:"Tea & Non-Coffee",
              images: images2
              
          },
          {
              id:3,
              title:"Specialty Drinks",
              images: images3
              
          },
          {
              id:4,
              title:"Pastries & Snacks",
              images: images4
              
          },
          {
              id:5,
              title:"Light Meals",
              images: images5
              
          }
        ]

 
  return (
    <>
    <div className="bg-background">
        <div className="">
          <img className=' h-72 w-[100%]'
           src={menu} alt="Menu Banner" />
            <div className="absolute flex flex-col items-center justify-center text-center text-text_primary ">
            <h2 className="absolute text-6xl font-bold ml-[93rem] mb-72 text-start">Our Menu</h2>

          <input className='absolute h-12 mt-3 w-[40rem] rounded-2xl ml-[90rem] px-5 text-gray-700 outline-none border-none'
           type="text" name="" id="" 
           placeholder='Search here'
           value={searchTerm}
           onChange={(e)=>setSearchTerm(e.target.value)}/>
           
           <button className='absolute h-12 mt-3 text-white ml-[120rem] rounded-2xl w-52 hover:bg-secondary bg-primary'>Search</button>
        </div>
        <div className="">
        <div className="p-24">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    loop={true}
                    grabCursor={true}
                >
                   {category.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="flex items-center justify-center h-64 text-2xl font-bold text-white shadow-lg rounded-2xl bg-black/50"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${item.images})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                onClick={()=>handleCategoryClick(item.title)}
              >
               <p className='text-3xl text-text_primary'>{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
                </Swiper>
            </div>
         
        </div>
        </div>
        <div ref={menuRef} className="px-24">
          <MenuItems filteredItems={filteredItems} />
        </div>
    </div>
    </>
  )
}

export default Menu