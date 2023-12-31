import React, { useState } from 'react';
import api from '../routes/checkHandleApi';

const CheckHandleForm = () => {
  const [userHandle, setUserHandle] = useState('');
  const [response, setResponse] = useState(null);

  const handleInputChange = (event) => {
    setUserHandle(event.target.value);
  };

  const handleCheckAvailability = async (event) => {
    event.preventDefault();

    try {
      const response = await api.checkHandle({ userHandle });
      setResponse({ userHandle, response });
    } catch (error) {
      console.error('Error checking handle:', error);
    }
  };

  return (
    <div>
      <h3><a href="https://docs.silamoney.com/docs/check_handle" target="_blank">Check Handle</a></h3>  
      <form onSubmit={handleCheckAvailability}>
        <input type="text" value={userHandle} onChange={handleInputChange} />
        <button type="submit">Check Availability</button>
      </form>
      {response && (
        <div>
          <p>User Handle: {response.userHandle}</p>
          <p>API Response: <pre>{JSON.stringify(response.response.data, null, 2)}</pre></p>
        </div>
      )}
    </div>
  );
};

export default CheckHandleForm;
