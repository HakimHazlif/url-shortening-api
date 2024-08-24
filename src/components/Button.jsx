import React from 'react'

const Button = ({children, onClick}) => {
  function handleScrollToGetStart() {
    window.location.href = '#url-link'
  }

  return (
    <button className={`button-elm whitespace-nowrap  
      ${children === 'Get Started' || children === 'Sign Up'
        ? 'px-20 md:px-12 rounded-full'
        : 'w-full rounded-lg sm:w-1/5'
      }
    `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button