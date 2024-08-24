import React from 'react'
import Button from '../components/Button'

const Boost = ({ handleClick }) => {
  return (
    <div className='bg-boost-mobile sm:bg-boost-desktop bg-cover bg-dark-violet-100 flex flex-col h-80 gap-6 justify-center items-center'>
      <h2 className='text-white font-poppins text-4xl max-sm:text-3xl font-bold'>Boost your links today</h2>
      <Button 
        children={'Get Started'}
        onClick={handleClick}
        styles={'px-20 md:px-12 py-3  rounded-full'}
      />
    </div>
  )
}

export default Boost