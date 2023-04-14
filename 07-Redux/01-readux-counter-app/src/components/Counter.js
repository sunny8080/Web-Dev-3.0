import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/slices/CounterSlice';

const Counter = () => {

  // here state means store
  // useSelector((state)=>console.log(state))

  // useSelector is used to access state ( initialState of a slice )
  // const count = useSelector((store) => store.myCounter.count);
  // const count = useSelector((state) => state.myCounter.count);
  const { count } = useSelector((state) => state.myCounter);

  // useDispatch is used to call any reducers
  const dispatch = useDispatch();

  return (

    <div className="wrapper w-screen h-screen flex flex-col justify-center items-center bg-[#344151] gap-10 ">
      <h1 className='text-[#0398d4] font-medium text-2xl'>Increment And Decrement</h1>
      <div className='flex justify-center items-center bg-white gap-12 py-3 rounded-sm text-[25px] text-[#344151]'>
        <button
          onClick={() => dispatch(decrement())}
          className='w-20 border-[#bfbfbf] text-5xl text-center border-r-2'>
          -
        </button>

        <div className='font-bold text-5xl'>{count}</div>
        <button
          onClick={() => dispatch(increment())}
          className='w-20 border-[#bfbfbf] text-5xl text-center border-l-2'>
          +
        </button>



      </div>

      <button
        onClick={() => dispatch(reset())}
        className='bg-[#0398d4] text-white text-lg font-semibold px-5 py-2 rounded-md hover:bg-white hover:text-[#0398d4]  transition-all duration-300 '>
        Reset
      </button>

    </div>
  )
}

export default Counter
