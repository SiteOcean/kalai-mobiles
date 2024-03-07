import React, { useEffect, useState } from 'react';

export default function LoginAuth ({children}){

    const [storedValue, setStoredValue] = useState('');

    
    
      // Function to get a value from local storage
      const getValueFromLocalStorage = () => {
        const storedValue = localStorage.getItem('token');
        if (storedValue) {
            setStoredValue(storedValue)
        }
      };

      useEffect(() => {
        getValueFromLocalStorage();
      }, []);
  
      if(!storedValue){
        
        return null
        // return <div className='h-screen bg-gradient-to-br from-slate-300 animate-pulse flex justify-center items-center to-slate-900'>Checking Auth...</div>
    }

    return(

        <div>
            {children}
        </div>

    )

}