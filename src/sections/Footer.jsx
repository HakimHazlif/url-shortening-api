import React from 'react'
import { facebookIcon, instagramIcon, logo, pinterestIcon, twitterIcon } from '../assets/images'

const Footer = () => {
  return (
    <footer className='bg-dark-violet-200 py-16 text-white flex flex-col gap-10 md:flex-row md:items-start items-center padding-x md:justify-between'>
      <div>
        <img 
          src={logo}
          alt="logo"
          className='filter invert'
        />
      </div>
      <div className='flex flex-col gap-10 md:flex-row md:items-start lg:gap-20'>
        <div className="text-center md:text-start flex flex-col gap-5">
          <h3 className='text-lg font-poppins font-semibold'>Features</h3>
          <ul className="flex flex-col gap-3">
            <li className='text-li'>Link Shortening</li>
            <li className='text-li'>Branded Links</li>
            <li className='text-li'>Analytics</li>
          </ul>
        </div>
        <div className="text-center md:text-start flex flex-col gap-5">
          <h3 className='text-lg font-poppins font-semibold'>Resources</h3>
          <ul className="flex flex-col gap-3">
            <li className='text-li'>Blog</li>
            <li className='text-li'>Devlopers</li>
            <li className='text-li'>Support</li>
          </ul>
        </div>
        <div className="text-center md:text-start flex flex-col gap-5">
          <h3 className='text-lg font-poppins font-semibold'>Company</h3>
          <ul className="flex flex-col gap-3">
            <li className='text-li'>About</li>
            <li className='text-li'>Our Team</li>
            <li className='text-li'>Careers</li>
            <li className='text-li'>Contact</li>
          </ul>
        </div>
        <div className='flex gap-6 mt-4 md:mt-0'>
          <img src={facebookIcon} width={25} alt="facebook icon" className='cursor-pointer fill-white group-hover:fill-grayish-violet transition-colors duration-200'/>
          <img src={twitterIcon} width={25} alt="twitter icon" className='cursor-pointer'/>
          <img src={pinterestIcon} width={25} alt="pinterest icon" className='cursor-pointer'/>
          <img src={instagramIcon} width={25} alt="instagram icon" className='cursor-pointer'/>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer