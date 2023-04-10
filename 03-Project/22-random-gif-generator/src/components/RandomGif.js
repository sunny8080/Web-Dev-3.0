import React from 'react'
import useGif from '../hooks/useGif'
import Spinner from './Spinner'

const RandomGif = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className='w-11/12  md:w-1/2  bg-green-500 rounded-lg border border-black flex flex-col justify-center items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl font-bold uppercase underline'>A Random Gif</h1>

      <div className=''>
        {
          loading ? (<Spinner />) : (<img src={gif} className="w-[300px] md:w-[450px]" alt='random gif' />)
        }
      </div>

      <button className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] font-bold hover:bg-yellow-600 transition-all duration-200'
        onClick={() => fetchData()}>
        Generate
      </button>

    </div>
  )
}

export default RandomGif