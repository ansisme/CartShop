import React,{useEffect, useState} from 'react'
import './styles.css';
const APIFetch = () => {

  const REACT_APP_NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
  const [nasadata, setNasadata] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(REACT_APP_NASA_API_KEY);
  useEffect(() => {
    getNasaData();

    async function getNasaData() {
      setLoading(true);
      try {
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_NASA_API_KEY}`);
        const data = await res.json();
        setNasadata(data);
      } catch (error) {
        console.error("Error fetching NASA data:", error);
      } finally {
        setLoading(false);
      }
    }

    console.log(nasadata); // Log the fetched data

  }, []);

  if (loading) {
    return (
      <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" className='loader' alt="loading" />
    );
  }

  return (
    <>
      <div className='bg-black h-screen w-screen text-white'>
        <div className="flex flex-col center p-3">
          <h1 className='font-bold text-4xl max-sm:text-2xl max-md:text-2xl p-3 text-center'>{nasadata.title}</h1>
          <h4 className='font-medium text-xl max-sm:text-xl max-md:text-2xl p-3 text-center'>{nasadata.date}</h4>
          <div className='flex p-10 max-sm:flex-col items-center justify-center'>
            <img className='w-[30%] custom-bounce rounded-2xl max-sm:w-full max-md:w-full' src={nasadata.url} alt="nasa" />
            <p className='w-1/2 p-10 text-left max-sm:w-full max-md:w-full'>{nasadata.explanation}</p>
          </div>
        <p>{nasadata.thumnail_url}</p>
      </div>
    </div>

    </>
  );
};



export default APIFetch