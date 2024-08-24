import { useRef, useState } from 'react'
import Button from '../components/Button'

const Shortener = ({ urlLink, setUrlLink }) => {
  const [isEmpty, setIsEmpty] = useState(false)
  const [validURL, setValidURL] = useState(true)
  const [urlInput, setUrlInput] = useState('')
  const [invalidMessage, setInvalidMessage] = useState(false)


  function handleClick(ref) {
    if (urlInput === '') {
      setIsEmpty(true)
    } else {
      setIsEmpty(false)
    }
    
    setValidURL(validateURL(urlInput))
    if (validURL) {
      setUrlLink(urlInput)
    }

    if (!validURL && !isEmpty) {
      setInvalidMessage(true)
    } else {
      setInvalidMessage(false)
    }
  }


  function validateURL(url) {
    try {
      new URL(url);
      return true;
    } catch (err) {
      return false;
    }
  }

  return (
    <div id='get-sterted' className='padding-x w-full'>
      <div className='w-full bg-shorten-mobile sm:bg-shorten-desktop bg-cover bg-dark-violet-100 px-6 py-8 sm:p-10 rounded-lg'>
        <div className='flex flex-col sm:flex-row gap-4'>
          <div className='w-full'>
            <label htmlFor="url-link" className='hidden'>URL link:</label>
            <input 
              type="text" 
              name="url-link" 
              id="url-link" 
              placeholder='Shorten a link here...' 
              value={urlInput} 
              className='inputField'
              onChange={(e) => {
                setUrlInput(e.target.value)
              }}
              onClick={() => {
                setIsEmpty(false)
                setInvalidMessage(false)
              }}
            />
          </div>
          <Button 
            children={'Shorten it!'}
            onClick={handleClick}
          />
        </div>
        <div className='mt-2 -mb-2'>
          {isEmpty && <em className='text-red text-base'>Please add a link</em>}
          {invalidMessage && <em className='text-red text-base'>Invalid link, please add a correct link</em>}
        </div>
      </div>
    </div>
  )
}

export default Shortener

/**/