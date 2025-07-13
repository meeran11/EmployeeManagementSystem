import React, { useState, useEffect } from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  const [currentData, setCurrentData] = useState(data);

  useEffect(() => {
    // Function to update data from localStorage
    const updateData = () => {
      const lStorage = JSON.parse(localStorage.getItem('employees'));
      const updated = Array.isArray(lStorage) ? lStorage.find(elem => elem.email === data.email) : undefined;
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
    <div id='task-list' className='overflow-x-auto mt-5 h-[55%] w-full flex items-center justify-start gap-5 flex-nowrap pt-2 pb-4 px-1 sm:px-0'>
            {currentData.tasks.map((elem,id)=>{
               if(elem.active){
                return <AcceptTask key={id} elem={elem} data={currentData}/>
               }
               else if(elem.completed){
                return <CompleteTask key={id} elem={elem} data={currentData}/>
               }
               else if(elem.failed){
                return <FailedTask key={id} elem={elem} data={currentData}/>
               }
               else if(elem.newTask){
                return <NewTask key={id} elem={elem} data={currentData}/>
               }
               else{
                return null
               }
            })}
        </div>

  )
}

export default TaskList