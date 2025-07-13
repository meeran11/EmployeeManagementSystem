import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import { getLocalStorage } from '../../utils/localStorage'

const AllTask = () => {
  
  const [userData, setUserData] = useState(useContext(AuthContext))
  
    useEffect(() => {
    // Function to update data from localStorage
    const updateData = () => {
      const { employees, admin } = getLocalStorage()
      setUserData({ employees, admin })
    }
    
    // Update immediately
    updateData()
    
    // Check for updates every 500ms
    const interval = setInterval(updateData, 500)
    
    // Cleanup interval on unmount
    return () => clearInterval(interval)
  }, [])

   
  return (
    <div className='bg-[#1C1C1C] p-4 sm:p-8  w-full mt-4'>
      <div className='overflow-x-auto w-full'>
        <div className='min-w-[600px]'>
          <div className='grid grid-cols-5 bg-blue-500 text-white py-3 px-2 sm:px-4 rounded-t-lg font-semibold text-center text-xs sm:text-base w-full'>
            <div>Employee Name</div>
            <div>New Task</div>
            <div>Active Task</div>
            <div>Completed</div>
            <div>Failed</div>
          </div>
          {Array.isArray(userData.employees) && userData.employees.map((elem, idx) => (
            <div key={idx} className='grid grid-cols-5 bg-[#23232a] hover:bg-[#2a2a32] rounded-b-lg transition border-b border-gray-700 py-3 px-2 sm:px-4 text-center text-xs sm:text-base w-full'>
              <div className='font-medium text-white'>{elem.firstName}</div>
              <div className='font-medium text-blue-400'>{elem.taskCounts.newTask}</div>
              <div className='font-medium text-yellow-400'>{elem.taskCounts.active}</div>
              <div className='font-medium text-green-500'>{elem.taskCounts.completed}</div>
              <div className='font-medium text-red-600'>{elem.taskCounts.failed}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllTask