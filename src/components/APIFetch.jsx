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
      <div className='bg-black max-sm:h-full max-md:w-full max-lg:w-full max-lg:h-full h-screen w-screen  text-white'>
        <div className="flex flex-col center p-3">
          <h1 className='font-bold text-4xl max-sm:text-2xl max-md:text-2xl max-xs:text-[18px] p-3 text-center'>{nasadata.title}</h1>
          <h4 className='font-medium text-xl max-sm:text-xl max-md:text-2xl max-xs:text-[16px] p-3 text-center'>{nasadata.date}</h4>
          <div className='flex p-10 max-sm:flex-col max-md:flex-col max-lg:flex-col items-center justify-center'>
            <img className='w-[30%] custom-bounce rounded-2xl max-sm:w-full max-md:w-full max-xs:w-full max-lg:w-[60%]' src={nasadata.url} alt="nasa" />
            <p className='w-1/2 p-10 max-sm:p-2 max-md:p-2 max-lg:p-4 max-xs:p-1 text-left max-xs:w-full max-sm:w-full max-md:w-full max-lg:w-full font-normal max-sm:text-[12px] max-xs:text-[12px] max-md:text-[16px]'>{nasadata.explanation}</p>
          </div>
      </div>
    </div>

    </>
  );
};



export default APIFetch