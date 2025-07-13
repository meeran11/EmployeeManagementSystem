import React, { useState, useEffect } from 'react'

const TaskListNumbers = ({data}) => {
  const [currentData, setCurrentData] = useState(data);

  useEffect(() => {
    // Function to update data from localStorage
    const updateData = () => {
      let lStorage = [];
      try {
        const stored = JSON.parse(localStorage.getItem('employees'));
        if (Array.isArray(stored)) {
          lStorage = stored;
        }
      } catch (e) {
        lStorage = [];
      }
      const updated = lStorage.find && lStorage.find(elem => elem.email === data.email);
      if (updated) {
        setCurrentData(updated);
      } else {
        setCurrentData(data);
      }
    };

    // Initial update
    updateData();

    // Check for updates every 500ms for immediate response
    const interval = setInterval(updateData, 500);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className='mt-8 grid grid-cols-1 sm:grid-cols-4 gap-6 w-full'>
      <div className='flex flex-col justify-center items-center bg-yellow-500 rounded-2xl shadow-lg h-32 w-full'>
        <span className='text-4xl font-extrabold text-white mb-2'>{currentData.taskCounts.newTask}</span>
        <span className='text-lg font-semibold text-white'>New Tasks</span>
      </div>
      <div className='flex flex-col justify-center items-center bg-green-500 rounded-2xl shadow-lg h-32 w-full'>
        <span className='text-4xl font-extrabold text-white mb-2'>{currentData.taskCounts.completed}</span>
        <span className='text-lg font-semibold text-white'>Completed</span>
      </div>
      <div className='flex flex-col justify-center items-center bg-blue-400 rounded-2xl shadow-lg h-32 w-full'>
        <span className='text-4xl font-extrabold text-white mb-2'>{currentData.taskCounts.active}</span>
        <span className='text-lg font-semibold text-white'>Accepted</span>
      </div>
      <div className='flex flex-col justify-center items-center bg-red-500 rounded-2xl shadow-lg h-32 w-full'>
        <span className='text-4xl font-extrabold text-white mb-2'>{currentData.taskCounts.failed}</span>
        <span className='text-lg font-semibold text-white'>Failed</span>
      </div>
    </div>
  )
}

export default TaskListNumbers