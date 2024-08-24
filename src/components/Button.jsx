import React from 'react'

const Button = ({children, onClick, styles}) => {

  return (
    <button className={`button-elm whitespace-nowrap  
      ${styles}
    `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

/*
children === 'Get Started' || children === 'Sign Up'
        ? 'px-20 md:px-12 rounded-full'
        : 'w-full rounded-lg sm:w-1/5'
*/