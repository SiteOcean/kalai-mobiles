import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

// NEXT_PUBLIC_LOCAL_BACKEND_URI // BACKEND_URI
let backendPath = process.env.NEXT_PUBLIC_BACKEND_URI
const SignupForm = () => {
  const [adminUser, setAdminUser] = useState({
    username: '',
    password: '',
    email: '',
    mobile: '',
    designation: '',
  });
  const router = useRouter();
  const [errors, setErrors] = useState({});

  const setFormObject = (e) => {
    setAdminUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!adminUser.username.trim()) {
      newErrors.username = 'Username is required.';
    }

    if (!adminUser.password.trim()) {
      newErrors.password = 'Password is required.';
    }

    if (!adminUser.email.trim()) {
      newErrors.email = 'Email is required.';
    }

    if (!adminUser.mobile.trim()) {
      newErrors.mobile = 'Mobile is required.';
    }

    if (!adminUser.designation.trim()) {
      newErrors.designation = 'Designation is required.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(backendPath+'createAdmin', adminUser);
      console.log('User created:', response.status);
      if(response.status === 200){
        alert("Admin Created Success!")
        router.replace('login');
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className={`w-full border rounded-md p-2 focus:outline-none focus:border-blue-500 ${
                errors.username ? 'border-red-500' : ''
              }`}
              onChange={(e) => setFormObject(e)}
            />
            {errors.username && (
              <div className="text-red-500 text-sm">
                <p>{errors.username}</p>
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
              Password:
            </label>
            <input
              type="text"
              id="password"
              name="password"
              className={`w-full border rounded-md p-2 focus:outline-none focus:border-blue-500 ${
                errors.password ? 'border-red-500' : ''
              }`}
              onChange={(e) => setFormObject(e)}
            />
            {errors.password && (
              <div className="text-red-500 text-sm">
                <p>{errors.password}</p>
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
              Mobile:
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              className={`w-full border rounded-md p-2 focus:outline-none focus:border-blue-500 ${
                errors.mobile ? 'border-red-500' : ''
              }`}
              onChange={(e) => setFormObject(e)}
            />
            {errors.mobile && (
              <div className="text-red-500 text-sm">
                <p>{errors.mobile}</p>
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full border rounded-md p-2 focus:outline-none focus:border-blue-500 ${
                errors.email ? 'border-red-500' : ''
              }`}
              onChange={(e) => setFormObject(e)}
            />
            {errors.email && (
              <div className="text-red-500 text-sm">
                <p>{errors.email}</p>
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
              Designation:
            </label>
            <input
              type="designation"
              id="designation"
              name="designation"
              className={`w-full border rounded-md p-2 focus:outline-none focus:border-blue-500 ${
                errors.designation ? 'border-red-500' : ''
              }`}
              onChange={(e) => setFormObject(e)}
            />
            {errors.designation && (
              <div className="text-red-500 text-sm">
                <p>{errors.designation}</p>
              </div>
            )}
          </div>
          {/* Repeat similar structure for other input fields */}
          <button
            type="button"
            onClick={handleFormSubmit}
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
