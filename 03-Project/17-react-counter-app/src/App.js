import { useState } from 'react';
import './App.css';


function App() {

  const [count, setCount] = useState(0);

  function decrementHandler() {
    setCount(count - 1)
  }

  function resetHandler() {
    setCount(0)
  }

  return (
    <div className="wrapper w-screen h-screen flex flex-col justify-center items-center bg-[#344151] gap-10 ">

      <h1 className='text-[#0398d4] font-medium text-2xl'>Increment And Decrement</h1>

      <div className='flex justify-center items-center bg-white gap-12 py-3 rounded-sm text-[25px] text-[#344151]'>
        <button onClick={decrementHandler} className='w-20 border-[#bfbfbf] text-5xl text-center border-r-2'>-</button>

        <div className=' font-bold text-5xl'>{count}</div>

        <button onClick={() => setCount(count + 1)} className='w-20 border-[#bfbfbf] text-5xl text-center border-l-2'>+</button>
      </div>

      <button onClick={resetHandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-md hover:bg-[#18bd67] text-lg '>Reset</button>
    </div>
  );
}

export default App;
