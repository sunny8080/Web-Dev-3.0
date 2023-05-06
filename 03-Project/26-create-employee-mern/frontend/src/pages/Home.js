import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [empData, setEmpData] = useState([]);

  const getAllEmployee = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASE_URL}/employees`
      });
      setEmpData(res.data.data);
    } catch (err) {
      setEmpData([]);
      console.log(err.message);
    }
    setLoading(false);
  }


  useEffect(() => {
    getAllEmployee();
  }, []);


  return (
    <div className='container px-4 mx-auto py-4' >

      {/* Top Bar */}
      <div className='flex items-center justify-between'>
        <div className='flex flex-col ' >
          <h2 className=' text-lg font-medium text-gray-800  dark:text-white '>Employees</h2>
          <p className='mt-1 text-sm text-gray-500 dark:text-gray-300' >
            This is a list of all employees. You can add new employees, edit or delete existing ones.
          </p>
        </div>
        <div>
          <Link to={"/addemployee"}>
            <button className=' rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500' >
              Add Employee</button>
          </Link>
        </div>
      </div>

      {/* list section */}
      <div className='mt-6 overflow-x-auto border border-gray-200 dark:border-gray-700 md:rounded-lg -mx-4 md:-mx-0 ' >
        <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700' >
          <thead className=' bg-gray-400 dark:bg-gray-800' >
            <tr>
              <th className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400' scope='col' >Employee</th>
              <th className='py-3.5 px-12 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400' scope='col' >Title</th>
              <th className='py-3.5  px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400' scope='col' >Role</th>
            </tr>
          </thead>



          <tbody className=' bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700' >
            {
              loading
                ?
                <tr>
                  <th></th>
                  <th>
                    <p className='font-medium text-gray-900 dark:text-white text-left ml-11 py-10' >Loading...</p>
                  </th>
                  <th></th>
                </tr>
                :
                empData?.map((emp, ind) => (
                  <tr key={ind} >
                    <td className='py-4 px-4 whitespace-nowrap' >
                      <div className='flex items-center '>
                        <div className='h-10 w-10 flex-shrink-0' >
                          <img className='h-10 w-10 rounded-full object-cover' src={emp.image} alt="avatar" />
                        </div>

                        <div className='ml-4 flex flex-col '>
                          <h2 className='text-sm font-medium  text-gray-900 dark:text-white' >{emp.name}</h2>
                          <p className='text-sm text-gray-500 dark:text-gray-300' >{emp.email}</p>
                        </div>

                      </div>
                    </td>

                    <td className='py-4 px-12 whitespace-nowrap' >
                      <p className='text-sm  text-gray-900 dark:text-white' >{emp.title}</p>
                      <p className='text-sm text-gray-500 dark:text-gray-300' >{emp.department}</p>
                    </td>

                    <td className='py-4 px-4 whitespace-nowrap'>
                      <p className='text-sm text-gray-500 dark:text-gray-300' >{emp.role}</p>
                    </td>

                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Home
