import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const EmployeeForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const addEmployee = async (data) => {
    // send a POST request to store employee data
    try {
      // const res = await axios({
      //   method: 'post',
      //   url: `${process.env.REACT_APP_BASE_URL}/employees/addemployee`,
      //   data: data
      // })

      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/employees/addemployee`,
        data,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log("Response ...");
      console.log(res);
    } catch (err) {
      console.log("Error Occured");
      console.log(err);
    }

    navigate('/')
  };


  return (
    <div>
      <form onSubmit={handleSubmit(addEmployee)} className='mt-8 space-y-5' >
        <div>
          <label className='text-base font-medium text-gray-900 dark:text-gray-200' htmlFor="name">Employee Name</label>

          < input
            className='mt-2.5 h-10 w-full rounded-md border border-gray-300  bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400  focus:ring-offset-1  dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50'
            type="text"
            placeholder='Enter Your Full Name'
            {...register('name', { required: "error message" })}
            required
          />
        </div>

        <div>
          <label className='text-base font-medium text-gray-900 dark:text-gray-200' htmlFor="email">Employee Email Id</label>

          < input
            className='mt-2.5 h-10 w-full rounded-md border border-gray-300  bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400  focus:ring-offset-1  dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50'
            type="email"
            placeholder='Enter Your Email Id'
            {...register('email', { required: true })}
            required
          />
        </div>

        <div>
          <label className='text-base font-medium text-gray-900 dark:text-gray-200' htmlFor="title">Employee Title</label>

          < input
            className='mt-2.5 h-10 w-full rounded-md border border-gray-300  bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400  focus:ring-offset-1  dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50'
            type="text"
            placeholder='Enter Your Employee Title'
            {...register('title', { required: true })}
            required
          />
        </div>

        <div>
          <label className='text-base font-medium text-gray-900 dark:text-gray-200' htmlFor="department">Employee Department</label>

          < input
            className='mt-2.5 h-10 w-full rounded-md border border-gray-300  bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400  focus:ring-offset-1  dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50'
            type="text"
            placeholder='Enter Your Employee Department'
            {...register('department', { required: true })}
            required
          />
        </div>

        <div>
          <label className='text-base font-medium text-gray-900 dark:text-gray-200' htmlFor="role">Employee Role</label>

          < input
            className='mt-2.5 h-10 w-full rounded-md border border-gray-300  bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400  focus:ring-offset-1  dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50'
            type="text"
            placeholder='Enter Your Employee Role'
            {...register('role', { required: true })}
            required
          />
        </div>

        <div>
          <button className=' inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500'
            type='submit' >
            Add Employee
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>

      </form>
    </div>
  )
}

export default EmployeeForm
