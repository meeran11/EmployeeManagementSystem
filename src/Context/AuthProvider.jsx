import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        // Check if localStorage already has data
        const existingEmployees = localStorage.getItem('employees');
        const existingAdmin = localStorage.getItem('admin');
        
        // Only set initial data if localStorage is empty
        if (!existingEmployees || !existingAdmin) {
            setLocalStorage();
        }
        
        const {employees,admin} = getLocalStorage();
        setUserData({employees,admin});
    }, [])
    
    

    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider