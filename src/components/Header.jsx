import React from 'react'
import Logo from  './../assets/Images/logo2.jpg'
import { IoLogoYoutube } from "react-icons/io";

function Header() {
  return (
    <div className='flex justify-between items-center'>
      <img src={Logo} className='h-[180px]'/>
      <ul className='flex gap-4 md:gap-14'>
        <li className='hover:font-bold cursor-pointer '>Home</li>
        <li className='hover:font-bold cursor-pointer '>About us</li>
        <li className='hover:font-bold cursor-pointer '>Contact us</li>
      </ul>
      <button className='bg-red-500 rounded-full text-white flex items-center'>Subscribe <IoLogoYoutube className='ml-3 text-[20px]'/></button>
    </div>
  )
}

export default Header