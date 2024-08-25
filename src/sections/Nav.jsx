import React, { useState } from 'react'
import { illustrationWorking, logo } from '../assets/images'
import Button from '../components/Button'
import BarMenu from '../components/BarMenu'

const Nav = () => {
  const [barClick, setBarClick] = useState(false);

  function handleShowBarMenu() {
    setBarClick(!barClick)
  }

  return (
    <nav className='py-12 padding-x max-sm:px-6 flex justify-between items-center mb-10 max-sm:pt-6'>
      <div className='flex items-center lx:gap-16 lg:gap-14 md:gap-6 gap-10'>
        <img 
          src={logo}
          alt="logo" 
        />
        <ul className='max-md:hidden flex lg:gap-8 md:gap-7 gap-6 '>
          <li className='text-lg font-medium text-grayish-violet cursor-pointer hover:text-black duration-200'>Features</li>
          <li className='text-lg font-medium text-grayish-violet cursor-pointer hover:text-black duration-200'>Pricing</li>
          <li className='text-lg font-medium text-grayish-violet cursor-pointer hover:text-black duration-200'>Resources</li>
        </ul>
      </div>
      <div className='flex gap-8 items-center'>
        <div className='md:hidden text-2xl cursor-pointer text-grayish-violet hover:text-black' onClick={handleShowBarMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
        {barClick && (<BarMenu />) }
        <button className='max-md:hidden text-lg font-medium text-grayish-violet cursor-pointer hover:text-black duration-200'>Login</button>
        <button className='max-md:hidden bg-cyan rounded-full px-8 py-2 text-white font-medium text-lg cursor-pointer hover:opacity-70 duration-200 whitespace-nowrap'>Sign Up</button>
      </div>
    </nav>
  )
}

export default Nav