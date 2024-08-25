import React from 'react'
import { advanceCards } from '../constract'
import Card from '../components/Card'

const Cards = () => {
  return (
    <div className='relative'>
      <div className='flex flex-col justify-center items-center gap-28 md:gap-20 lg:gap-8 lg:flex-row'>
        {advanceCards.map((advance, index) => (
          <Card 
            key={index}
            image={advance.image}
            title={advance.title}
            pragraph={advance.pragraph}
            index={index}
          />
        ))}
      </div>
      
      <div className='flex justify-center items-center'>
        <div className='absolute top-80 bg-cyan h-2 lg:w-1/5 w-3/5 rotate-90 lg:rotate-0 lg:top-[40%] lg:left-[20%]'></div>
        <div className='absolute bottom-96 bg-cyan h-2 lg:w-1/5 w-3/5 rotate-90 lg:rotate-0 lg:bottom-[50%] xl:bottom-[48%] lg:right-[20%]'></div>
      </div>
    </div>
    
  )
}

export default Cards