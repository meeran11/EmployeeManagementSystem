import React from 'react'

const AcceptTask = (props) => {
  const handleMarkAsCompleted = (e) => {
    console.log("Mark as Completed");

    // Get employees from localStorage
    const employees = JSON.parse(localStorage.getItem('employees'));

    // Find the current employee
    const employeeIndex = employees.findIndex(emp => emp.email === props.data.email);

    if (employeeIndex !== -1) {
      // Find the task
      const taskIndex = employees[employeeIndex].tasks.findIndex(task =>
        task.taskTitle === props.elem.taskTitle &&
        task.taskDescription === props.elem.taskDescription
      );

      if (taskIndex !== -1) {
        employees[employeeIndex].tasks[taskIndex].completed = true;
        employees[employeeIndex].tasks[taskIndex].active = false;
      }

      // Update task counts
      employees[employeeIndex].taskCounts.completed++;
      employees[employeeIndex].taskCounts.active--;

      // Save back to localStorage
      localStorage.setItem('employees', JSON.stringify(employees));
      
      console.log('Task marked as completed. Updated counts:', employees[employeeIndex].taskCounts);
    }
  };

  const handleMarkAsFailed = (e) => {
    console.log("Mark as Failed");

    // Get employees from localStorage
    const employees = JSON.parse(localStorage.getItem('employees'));

    // Find the current employee
    const employeeIndex = employees.findIndex(emp => emp.email === props.data.email);

    if (employeeIndex !== -1) {
      // Find the task
      const taskIndex = employees[employeeIndex].tasks.findIndex(task =>
        task.taskTitle === props.elem.taskTitle &&
        task.taskDescription === props.elem.taskDescription
      );

      if (taskIndex !== -1) {
        employees[employeeIndex].tasks[taskIndex].failed = true;
        employees[employeeIndex].tasks[taskIndex].active = false;
        employees[employeeIndex].tasks[taskIndex].newTask = false;
      }

      // Update task counts
      employees[employeeIndex].taskCounts.failed++;
      employees[employeeIndex].taskCounts.active--;

      // Save back to localStorage
      localStorage.setItem('employees', JSON.stringify(employees));
      
      console.log('Task marked as failed. Updated counts:', employees[employeeIndex].taskCounts);
    }
  };

  return (
    <div className='px-5 py-3 flex-shrink-0 h-64 min-w-[260px] w-[300px] bg-blue-500 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-900  text-white text-sm px-3 py-1 rounded'>{props.elem.category}</h3>
        <h4 className='text-white text-sm'>{props.elem.taskDate}</h4>
      </div>
      <h2 className='text-white text-3xl font-bold mt-5'>{props.elem.taskTitle}</h2>
      <p className='text-white text-sm'>{props.elem.taskDescription}</p>
      <div className='mt-2 flex flex-row gap-2 items-center justify-center'>
        <button onClick={handleMarkAsCompleted} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-xs px-2 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Mark as Completed</button>
        <button onClick={handleMarkAsFailed} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-xs px-4 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask