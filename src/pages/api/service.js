// File: api.js (or wherever you've defined your fetchAllProducts function)
import axios from 'axios';
// NEXT_PUBLIC_LOCAL_BACKEND_URI // BACKEND_URI
// NEXT_PUBLIC_BACKEND_URI
let backendPath = process.env.NEXT_PUBLIC_LOCAL_BACKEND_URI

export const fetchAllProducts = async () => {
  let maxRetries = 3;
  let currentRetry = 0;
    
  const fetchWithTimeout = async () => {
    try {
      const response = await axios.get(backendPath+"getAllProducts");
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error for retry mechanism
    }
  };

  const fetchDataWithRetry = async () => {
    while (currentRetry < maxRetries) {
      try {
        const data = await Promise.race([
          fetchWithTimeout(),
          new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 30000))
        ]);

        return data; // Return the data on successful response
      } catch (error) {
        console.error(`Error fetching data (retry ${currentRetry + 1}/${maxRetries}):`, error);
        currentRetry += 1;
      }
    }

    throw new Error('Max retries reached'); // Throw an error if maxRetries is reached without success
  };

  return await fetchDataWithRetry(); // Return the result of the retry function
};

export const fetchAllOffers = async () => {
  let maxRetries = 3;
  let currentRetry = 0;
    
  const fetchWithTimeoutOffers = async () => {
    try {
      const response = await axios.get(backendPath+"getAllOffers");
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error for retry mechanism
    }
  };

  const fetchDataWithRetryOffers = async () => {
    while (currentRetry < maxRetries) {
      try {
        const data = await Promise.race([
          fetchWithTimeoutOffers(),
          new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 30000))
        ]);

        return data; // Return the data on successful response
      } catch (error) {
        console.error(`Error fetching data (retry ${currentRetry + 1}/${maxRetries}):`, error);
        currentRetry += 1;
      }
    }

    throw new Error('Max retries reached'); // Throw an error if maxRetries is reached without success
  };

  return await fetchDataWithRetryOffers(); // Return the result of the retry function
};

export const fetchAllProductsByCategory = async (category) => {
    let maxRetries = 3;
    let currentRetry = 0;
  
    const fetchWithTimeoutCategory = async () => {
      try {
        const response = await axios.post(backendPath+'getProductsByCategory',
        {category});
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error for retry mechanism
      }
    };
  
    const fetchDataWithRetryCategory = async () => {
      while (currentRetry < maxRetries) {
        try {
          const data = await Promise.race([
            fetchWithTimeoutCategory(),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 30000))
          ]);
  
          return data; // Return the data on successful response
        } catch (error) {
          console.error(`Error fetching data (retry ${currentRetry + 1}/${maxRetries}):`, error);
          currentRetry += 1;
        }
      }
  
      throw new Error('Max retries reached'); // Throw an error if maxRetries is reached without success
    };
  
    return await fetchDataWithRetryCategory(); // Return the result of the retry function
  };


export const fetchParticularProduct= async(productId, path)=>{

  if(!productId)return;
  try {
    const response = await axios.post(backendPath + path,
    {_id:productId});
    if(response.status == 200){
      return response.data;
    }
   
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export const addItems = async (item, path) => {
  try {
    const response = await axios.post(backendPath + path, item);
    if (response.status === 200) {
      return true;
    } else {
      console.error('Failed to add product. Response:', response);
    }
  } catch (error) {
    console.error('Error adding product:', error);
  }
};

export const deleteProductById= async(priductId, path)=>{

  try{
    const response = await axios.post(backendPath + path, {_id:priductId});
    if(response.status == 200){
      return true
    }
   }
   catch(err){
    console.log(err)
   }
}

export const loginService = async (user) => {
  try {
    const response = await axios.post(backendPath + 'adminLogin', {
      username: user.username,
      password: user.password,
    });
     
    if (response && response.status == 200 && response.data && response.data.message === 'Login successful') {
      return response.data.admin;
    } else {
      throw new Error('Login unsuccessful'); // You can customize the error message based on your needs
    }
  } catch (error) {
    console.error('Error in loginService:', error.message);
    throw error; // Rethrow the error to propagate it to the caller or handle it further if needed
  }
};

export const signupService = async (userData) => {
  try {
    const response = await axios.post(backendPath + 'createAdmin', userData);

    if (response && response.status === 200) {
      return response.data.message;
    } else {
      throw new Error('Error in signupService: Unexpected response status');
    }
  } catch (error) {
    console.error('Error in signupService:', error.message);
    throw error; // Rethrow the error to propagate it to the caller or handle it further if needed
  }
};

export const editItem = async (item, path) => {
  try {
    const response = await axios.post(backendPath + path, item);
    if (response.status === 200) {
      return true;
    } else {
      console.error('Failed to add product. Response:', response);
    }
  } catch (error) {
    console.error('Error adding product:', error);
  }
};