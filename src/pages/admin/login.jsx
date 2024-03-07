import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { loginService } from '../api/service';
import CustomLoader from '@/components/loader';

// NEXT_PUBLIC_LOCAL_BACKEND_URI // BACKEND_URI
let backendPath = process.env.NEXT_PUBLIC_BACKEND_URI
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
   
    // Reset previous error messages
  

    // Client-side validation for username
    if (!username.trim()) {
      setUsernameError('Username is required.');
    }

    // Client-side validation for password
    if (!password.trim()) {
      setPasswordError('Password is required.');
    }

    // If there are validation errors, return early
    // if (usernameError || passwordError) {
    //   return;
    // }

    try {
      setIsLoading(false)
      const response = await loginService({username, password});
      if (response) {
        setUsernameError('');
      setPasswordError('');
        router.push('/admin/homepage/?id=' + response._id);
      }
     
    } catch (error) {
      // Set a generic error message for login failure
      console.error('Error creating user:', error);
      setUsernameError('check Username!');
        setPasswordError('Check Password!');
    }
    finally{
      setIsLoading(true)
      
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
     {isLoading ? <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
       
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className={`w-full border rounded-md p-2 focus:outline-none focus:border-blue-500 ${
                usernameError ? 'border-red-500' : ''
              }`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
             {usernameError && (
          <div className="mb-4 text-red-500 text-sm">
            <p>{usernameError}</p>
          </div>
        )}
          </div>
        
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className={`w-full border rounded-md p-2 focus:outline-none focus:border-blue-500 ${
                passwordError ? 'border-red-500' : ''
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
              {passwordError && (
            <div className="mb-4 text-red-500 text-sm">
              <p>{passwordError}</p>
            </div>
          )}
          </div>
          <button
            type="button"
            onDoubleClick={()=>router.push('signup')}
            onClick={handleFormSubmit}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div> : <div className='h-[60vh]'><CustomLoader/></div>}
    </div>
  );
};

export default LoginForm;
