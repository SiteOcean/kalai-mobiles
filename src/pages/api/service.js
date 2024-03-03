// File: api.js (or wherever you've defined your fetchAllProducts function)
import axios from 'axios';
// NEXT_PUBLIC_LOCAL_BACKEND_URI // BACKEND_URI
let backendPath = process.env.NEXT_PUBLIC_BACKEND_URI

export const fetchAllProducts = async () => {
  let maxRetries = 3;
  let currentRetry = 0;
    
  const fetchWithTimeout = async () => {
    try {
      const response = await axios.get(backendPath+'getAllProducts');
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
