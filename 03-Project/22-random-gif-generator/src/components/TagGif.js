import React, { useState } from 'react'
import useGif from '../hooks/useGif'
import Spinner from './Spinner'

const TagGif = () => {
    const [tag, setTag] = useState('Sunny');
    const { gif, loading, fetchData } = useGif();

    return (
        <form onSubmit={(e) => { e.preventDefault(); fetchData(tag) }}
            className=' w-11/12  md:w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col justify-center items-center gap-y-5 mt-[15px]'>

            <h1 className='mt-[15px] text-2xl font-bold uppercase underline'>
                Random {tag} Gif</h1>

            <div>
                {
                    loading ? (<Spinner />) : (<img src={gif} className="w-[300px] md:w-[450px]" alt='tag gif' />)
                }
            </div>

            <input type="text" onChange={(e) => setTag(e.target.value)} value={tag}
                className="w-10/12 text-lg py-2 rounded-lg mb-1 text-center"
            />

            <button className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] font-bold hover:bg-yellow-400 transition-all duration-200'>
                Generate
            </button>

        </form>
    )
}

export default TagGif