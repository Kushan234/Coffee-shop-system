import React from 'react'
import Banner5 from '../assets/banner5.jpg'
import Banner2 from '../assets/aboutbanner2.jpg'
import { motion } from 'framer-motion';
import { FadeUp } from '../Components/Hero/Hero';

const About = () => {

  const aboutImg = [
        {
          id:1,
          images: Banner5 
        },
  
        {
          id:3,
          images: Banner2 
        }
  ]
  return (
    <>
    <div className="bg-background">
    <div className="grid grid-cols-2 p-28">

      {/*left side */}
    <div className="ml-10 ">
    {
      aboutImg.map((imges)=>(
      <div key={imges.id} className="px-3">
        <img className='' 
         src={imges.images} alt="" />
      </div>
      ))
    }
    </div>

    {/* Right side */}
    <div className="px-10 text-justify">
    
    <motion.h2
     variants={FadeUp(0.6)} 
                initial="initial"
                animate="animate"  
     className="mb-6 text-4xl font-bold text-slate-900">
              Welcome to <span className="text-primary">Hot Coffee</span> ☕
            </motion.h2>


      <motion.p
      variants={FadeUp(0.8)} 
      initial="initial"
      animate="animate"  
       
      className='text-lg font-thin text-gray-800 '>
        At<span className='font-semibold text-slate-950 '> Hot Coffee, </span> we don’t just serve coffee—we create moments of warmth, comfort, and energy. Our passion for high-quality coffee drives us to bring you the best blends, crafted with love and expertise.
      Our journey began with a simple yet powerful idea: to make every cup of coffee an experience worth savoring. We source premium coffee beans from top-growing regions, ensuring that every sip is rich, aromatic, and full of flavor. Whether you’re a fan of bold espresso, smooth lattes, or indulgent mochas, we have something special for you.
      <br className='mt-2'/>
      Beyond great coffee, we aim to create a welcoming space where people can connect, work, and unwind. Whether you're stopping by for your morning pick-me-up, catching up with a friend, or enjoying a quiet moment alone, Hot Coffee is here to make every visit delightful.
      Join us for a cup, and let’s make your coffee moments unforgettable!
      <br />
      <br className='mt-2'/>
      But we’re more than just a coffee shop! We offer a comfortable dining area where you can enjoy your favorite coffee, delicious snacks, and a cozy atmosphere. Whether you're here for a quick caffeine fix, a casual meal, or a peaceful workspace, we’ve got the perfect spot for you.
      <br className='mt-2'/> Looking for a place to celebrate? Our event area is designed for parties, especially birthday celebrations!  Whether it’s an intimate gathering or a fun-filled bash, we provide the perfect setting to make your special day even more memorable.
      Come for the coffee, stay for the experience. We can’t wait to welcome you!
     
      </motion.p>
    </div>
    </div>
    </div>
    </>
  )
}

export default About