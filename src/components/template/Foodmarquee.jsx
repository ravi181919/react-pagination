import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";
import { PiBowlFoodDuotone } from "react-icons/pi";
import { FaBowlFood } from "react-icons/fa6";
import { motion } from 'framer-motion';
const Foodmarquee = () => {
  const foodIcons = [
    <IoFastFoodOutline />, <MdEmojiFoodBeverage />, <MdFastfood />, <MdFoodBank />, <PiBowlFoodDuotone />, <FaBowlFood />,  <IoFastFoodOutline />, <MdEmojiFoodBeverage />, <MdFastfood />, <MdFoodBank />, <PiBowlFoodDuotone />, <FaBowlFood />
  ]
  return (
   <div className="w-full flex gap-40 overflow-hidden py-10 px-10 ">
     <motion.div 
     initial={{x: '0'}}
     animate={{x:'-100%'}}
     transition={{
      repeat:Infinity,
      ease:"linear",
      duration: 10
     }}
     className='w-full flex shrink-0 gap-20'>
      {foodIcons.map((i , ind) => (
        <span key={ind} className='text-4xl'>{i}</span>
      ))}
    </motion.div>
     <motion.div 
     initial={{x: '0'}}
     animate={{x:'-100%'}}
     transition={{
      repeat:Infinity,
      ease:"linear",
      duration: 10
     }}
     className='w-full flex shrink-0 gap-20'>
      {foodIcons.map((i , ind) => (
        <span key={ind} className='text-4xl'>{i}</span>
      ))}
    </motion.div>
     <motion.div 
     initial={{x: '0'}}
     animate={{x:'-100%'}}
     transition={{
      repeat:Infinity,
      ease:"linear",
      duration: 10
     }}
     className='w-full flex shrink-0 gap-20'>
      {foodIcons.map((i , ind) => (
        <span key={ind} className='text-4xl'>{i}</span>
      ))}
    </motion.div>
   </div>
  )
}

export default Foodmarquee
