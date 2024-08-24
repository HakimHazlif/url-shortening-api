import React from 'react'

const BarMenu = () => {
  return (
    <div className='absolute bg-dark-violet-100 rounded-lg right-6 top-24 flex flex-col items-center px-6 py-10 w-[90%]'>
      <ul className='flex flex-col gap-5 items-center font-poppins text-white font-semibold text-xl'>
        <li className='hover:text-grayish-violet cursor-pointer'>Features</li>
        <li className='hover:text-grayish-violet cursor-pointer'>Pricing</li>
        <li className='hover:text-grayish-violet cursor-pointer'>Resouces</li>
      </ul>
      <hr className='h-[1px] my-8 border-slate-500 text-center w-full'/>
      <div className='flex flex-col w-full gap-7'>
        <button className='text-xl font-semibold text-white cursor-pointer hover:text-grayish-violet duration-200 font-poppins'>Login</button>
        <button className='bg-cyan rounded-full w-full py-3 text-white font-semibold text-xl cursor-pointer hover:opacity-70 duration-200 whitespace-nowrap font-poppins'>Sign Up</button>
      </div>
    </div>
  )
}

export default BarMenu