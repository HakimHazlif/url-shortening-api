import { useEffect, useState } from 'react'
import Nav from './sections/Nav';
import Intro from './sections/Intro';
import Shortener from './sections/Shortener';
import Advance from './sections/Advance';
import Cards from './sections/Cards';
import Boost from './sections/Boost';
import Footer from './sections/Footer';

function App() {
  const [urlLink, setUrlLink] = useState('')
  const [shortenList, setShortenList] = useState([])

  function handleGetStart() {
    window.location.href = '#url-link'
  }

  useEffect(() => {
    async function getShortURL() {
      const API_KEY = import.meta.env.VITE_SOCIALDATA_API_KEY

      const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
      const data = new FormData();

      if (urlLink !== '') {
        data.append('url', urlLink);
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

          setShortenList([...shortenList, {
            ...result,
            urlLink
          }])
          setUrlLink('')
          console.log(result);
          console.log(shortenList);
        } catch (error) {
          console.error(error);
        }
      }
    }
    getShortURL()
  }, [urlLink])

  return (
    <div className=''>
      <header>
        <Nav />
        <Intro handleClick={handleGetStart}/>
      </header>
      <main className='flex flex-col gap-52 bg-slate-100'>
        <div className='padding-x flex flex-col gap-32'>
          <Shortener urlLink={urlLink} setUrlLink={setUrlLink} shortenList={shortenList}/>
          <div className='flex flex-col gap-24'>
            <Advance /> 
            <Cards />
          </div>
        </div>
        <Boost handleClick={handleGetStart}/>
      </main>
      <Footer />
    </div>
  )
}

export default App
