import React from 'react'

const Card = ({image, title, pragraph, index}) => {
  return (
    <div className={`relative w-[360px] md:w-[460px] flex flex-col gap-6 justify-center items-center shadow-xl px-10 pb-10 pt-16 rounded-lg z-10 bg-white ${
      index === 1 && 'lg:mt-20'
    } ${index === 2 && 'lg:mt-40'}`}>
      <div className='absolute -top-11 lg:left-9 bg-dark-violet-100 w-20 h-20 rounded-full flex justify-center items-center'
      >
        <img 
          src={image} 
          alt="" 
          width={40}
        />
      </div>
      <div className='text-center font-poppins lg:text-start'>
        <h2 className='text-2xl font-bold text-dark-blue-200 mb-5'>{title}</h2>
        <p className='text-grayish-violet font-medium'>{pragraph}</p>
      </div>
    </div>
  )
}

export default Card