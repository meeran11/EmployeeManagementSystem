import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')                                  
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    }

  return (
    <div className='bg-gradient-to-l from-[#0C2340] to-[#003153] flex flex-col items-center justify-center min-h-screen p-4'>
        <h2 className='text-white text-2xl sm:text-3xl font-bold mb-4 text-center'>Employee Management System</h2>
        <h1 className='text-white text-4xl font-bold mb-10'>Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center border-2 border-blue-950 rounded-md w-full max-w-xs sm:max-w-md md:max-w-lg p-6 bg-[#232323] min-h-[300px] sm:min-h-[350px]'>
            <input value={email} onChange={e => setEmail(e.target.value)} required type="email" placeholder='Email' className='bg-black p-3 w-full h-10 border- border-blue-900 text-white mb-5 rounded-lg' />
            <input value={password} onChange={e => setPassword(e.target.value)} required type="password" placeholder='Password' className='bg-black border-1 border-blue-900 p-3 w-full h-10 text-white mb-5 rounded-lg' />
            <button type="submit" className="relative inline-flex items-center justify-center rounded-2xl p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  dark:bg-gray-900 rounded-2xl group-hover:bg-transparent group-hover:dark:bg-transparent">
Login
</span>
</button>
        </form>    
    </div>
  )
}

export default Login