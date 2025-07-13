import React from 'react'

const FailedTask = ({elem, data}) => {
  return (
    <div className='px-5 py-3 flex-shrink-0 h-64 min-w-[260px] w-[300px] bg-red-500 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-900  text-white text-sm px-3 py-1 rounded'>{elem.category}</h3>
                <h4 className='text-white text-sm'>{elem.taskDate}</h4>
            </div>
            <h2 className='text-white text-3xl font-bold mt-5'>{elem.taskTitle}</h2>
            <p className='text-white text-sm'>{elem.taskDescription}</p>
            <div className='mt-2 flex flex-row gap-2 items-center justify-center'>
                <span className="text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">✗ Failed</span>
            </div>
            </div>
  )
}

export default FailedTask