import { useEffect, useRef } from "react";
import Button from "./Button"

const ShortenLinkCard = ({shortLink, longLink}) => {
  const containerRef =useRef(null)


  let buttonText = 'Copy';
  return (
    <div className="w-full bg-white shadow-xl rounded-lg sm:py-4 pt-5 pb-6 px-9 sm:px-8 flex flex-col sm:flex-row sm:justify-between items-center gap-6 ">
      <p className="max-sm:w-full font-semibold text-lg md:text-xl flex-1 overflow-x-auto scroll-smooth scrollbar-none text-nowrap">{longLink}</p>
      <hr className="w-full border-slate-300 sm:hidden"/>
      <p className="max-sm:w-full font-semibold text-lg md:text-xl text-cyan sm:mr-4 overflow-x-auto scroll-smooth scrollbar-none sm:text-nowrap">{shortLink}</p>
      <Button 
        children={buttonText}
        onClick={()=> {}}
        styles={'w-full sm:w-[120px] rounded-lg py-2'}
      />
    </div>
  )
}

export default ShortenLinkCard