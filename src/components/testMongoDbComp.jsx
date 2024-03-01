import { useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [username, setUsername] = useState('');
  const [city, setCity] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/mongodb/utilitiesDb', { username, city });
      console.log('User created:', response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
