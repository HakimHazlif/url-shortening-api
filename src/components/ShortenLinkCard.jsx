import Button from "./Button"

const ShortenLinkCard = ({shortLink, longLink}) => {

  let buttonText = 'Copy';
  return (
    <div className="w-full bg-white shadow-xl rounded-lg pt-4 pb-5 px-4 flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-1">
      <p className="font-semibold text-lg md:text-xl flex-1">{longLink}</p>
      <hr className="w-full border-slate-300 sm:hidden"/>
      <p className="font-semibold text-lg md:text-xl text-cyan sm:mr-4">{shortLink}</p>
      <Button 
        children={buttonText}
        onClick={()=> {}}
        styles={'w-full sm:w-[120px] rounded-lg py-2'}
      />
    </div>
  )
}

export default ShortenLinkCard