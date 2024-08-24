import { useEffect, useState } from 'react'
import Nav from './sections/Nav';
import Intro from './sections/Intro';
import Shortener from './sections/Shortener';
import Advance from './sections/Advance';
import Cards from './sections/Cards';
import Boost from './sections/Boost';
import Footer from './sections/Footer';

function App() {
  const [shortURL, setShortURL] = useState('')
  const [urlLink, setUrlLink] = useState('')

  function handleScrollToGetStart() {
    window.location.href = '#url-link'
  }

  useEffect(() => {
    async function getShortURL() {
      const API_KEY = import.meta.env.VITE_SOCIALDATA_API_KEY


      const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
      const data = new FormData();
      data.append('url', 'https://google.com/');

      const options = {
        method: 'POST',
        headers: {
          'x-rapidapi-key': `${API_KEY}`,
          'x-rapidapi-host': 'url-shortener-service.p.rapidapi.com'
        },
        body: data
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
      
    }
    //getShortURL()
  }, [])

  return (
    <div className=''>
      <header>
        <Nav />
        <Intro handleClick={handleScrollToGetStart}/>
      </header>
      <main className='flex flex-col gap-32'>
        <Shortener urlLink={urlLink} setUrlLink={setUrlLink}/>
        <div className='flex flex-col gap-32'>
          <Advance />
          <Cards />
        </div>
        <Boost handleClick={handleScrollToGetStart}/>
      </main>
      <Footer />
    </div>
  )
}

export default App
