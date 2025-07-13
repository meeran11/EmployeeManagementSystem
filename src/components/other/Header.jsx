import React from 'react'

const Header = (props) => {
  
const handleLogout = () => {
  localStorage.removeItem('loggedInUser');
  props.changeUser(null);
  
}
  return (
    <div className='bg-[#1C1C1C] text-2xl semi-bold text-white flex items-end justify-between'>
        <h1 className=''>Hello <br /> <span className='text-3xl font-bold'>{props.data ? props.data.firstName : 'Admin'} 👋</span></h1>
        <button onClick={handleLogout} className='bg-red-600 text-white py-2 px-4 rounded-sm'>Logout</button>
    </div>
  )
}

export default Header 