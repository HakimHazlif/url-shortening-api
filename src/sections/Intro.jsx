import React from 'react'
import { illustrationWorking } from '../assets/images'
import Button from '../components/Button'

const Intro = ({ handleClick }) => {

  

  return (
    <div className='flex flex-col-reverse sm:flex-row gap-16 sm:gap-30 w-full sm:-right-[200px] padding-l mx-0 px-0 items-center mb-36'>
      <div className='flex flex-col gap-5 text-center items-center sm:px-0 px-10  sm:items-start sm:text-start sm:w-1/2'>
        <h1 className='text-title'>More than just shorter links</h1>
        <p className='text-p mb-8 sm:pr-6 xl:pr-16 '>Build your brand's recognition and get detailed insights on how your links are performing</p>
        <Button
          children={'Get Started'}
          onClick={handleClick}
          styles={'px-20 md:px-12 py-3 rounded-full'}
        />
      </div>
      <img 
        src={illustrationWorking} 
        alt="illustration"
        className='sm:w-1/2 -right-[20%]'
      />
    </div>
  )
}

export default Intro