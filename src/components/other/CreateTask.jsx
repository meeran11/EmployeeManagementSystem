import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import { getLocalStorage } from '../../utils/localStorage'

const CreateTask = () => {


    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()


        const data = JSON.parse(localStorage.getItem('employees'))

        data.forEach(function (elem) {
            if (asignTo === elem.firstName) {
                const taskObj = { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false };
                elem.tasks.push(taskObj);
                elem.taskCounts.newTask++;
            }


        })
        localStorage.setItem('employees', JSON.stringify(data))
        
        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <div className='bg-[#1c1c1c] p-8 rounded-xl w-full overflow-x-auto px-2 sm:px-4'>
            <form className='flex flex-col md:flex-row gap-8 w-full' onSubmit={(e) => { submitHandler(e) }}>
                <div className='flex-1 space-y-4 min-w-0'>
                    <div>
                        <h3 className='text-base text-gray-300 mb-1'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='text-base py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-600 text-white focus:ring-2 focus:ring-blue-400 mb-1 transition' type='text' placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-base text-gray-300 mb-1'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='text-base py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-600 text-white focus:ring-2 focus:ring-blue-400 mb-1 transition' type='date'
                        />
                    </div>
                    <div>
                        <h3 className='text-base text-gray-300 mb-1'>Assign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            className='text-base py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-600 text-white focus:ring-2 focus:ring-blue-400 mb-1 transition' type='text' placeholder='employee name'
                        />
                    </div>
                    <div>
                        <h3 className='text-base text-gray-300 mb-1'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='text-base py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-600 text-white focus:ring-2 focus:ring-blue-400 mb-1 transition' type='text' placeholder='design, dev, etc'
                        />
                    </div>
                </div>
                <div className='flex-1 flex flex-col space-y-4 min-w-0'>
                    <div>
                        <h3 className='text-base text-gray-300 mb-1'>Description</h3>
                        <textarea
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            className='w-full h-44 text-base py-2 px-3 rounded outline-none bg-transparent border border-gray-600 text-white focus:ring-2 focus:ring-blue-400 transition mb-1'
                        />
                    </div>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-white text-lg font-medium w-full transition'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask