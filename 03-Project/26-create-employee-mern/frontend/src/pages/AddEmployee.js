import React from 'react'
import { FaBackward } from "react-icons/fa";
import { Link } from 'react-router-dom'
import EmployeeForm from '../components/EmployeeForm';

const AddEmployee = () => {
  return (
    <div className='flex flex-col lg:flex-row' >

      {/* left section */}
      <div className='relative flex items-end md:justify-center px-4 pb-10 pt-60 sm:px-6 sm:pb-16  lg:px-8 lg:pb-24' >
        <div className='absolute inset-0' >
          <img className=' h-full w-full object-cover object-top' src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>

        <div className='absolute inset-0 bg-gradient-to-t from-black to to-transparent' ></div>


        <div className='relative w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24' >
          <h2 className=' text-4xl font-bold text-white' >Empower your business with our employee creation!</h2>
        </div>

      </div>



      {/* right section */}
      <div className='mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-14' >
        <h2 className='text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl' >Add a Employee</h2>
        <div className='mt-2 text-base' >
          <Link to={"/"} className='font-medium  text-indigo-600 flex items-center gap-3 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700' >
            <FaBackward />
            <p>Back to all Employee List</p>
          </Link>
        </div>


        <EmployeeForm />

      </div>
    </div>
  )
}

export default AddEmployee
