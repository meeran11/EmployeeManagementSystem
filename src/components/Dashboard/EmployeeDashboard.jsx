import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = (props) => {
  return (
    <div className='p-4 sm:p-8 md:p-10 bg-[#1C1C1C] min-h-screen w-full overflow-x-hidden'>
    <Header changeUser={props.changeUser} data={props.data}/>
    <TaskListNumbers changeUser={props.changeUser} data={props.data} />
    <TaskList changeUser={props.changeUser} data={props.data} />
    </div>
  )
}

export default EmployeeDashboard