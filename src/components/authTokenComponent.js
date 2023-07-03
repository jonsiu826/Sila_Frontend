import React, { useState } from 'react';
import api from '../routes/authTokenApi';

const AuthTokenForm = () => {
  const [response, setResponse] = useState(null);


  const handleAuthToken = async (event) => {
    event.preventDefault();

    try {
      const response = await api.authToken();
      setResponse({ response });
    } catch (error) {
      console.error('Error getting Auth Token:', error);
    }
  };

  return (
    <div>
      <h3>Auth Token Generator</h3>  
      <form onSubmit={handleAuthToken}>
        <input type="text"/>
        <button type="submit">Get Auth Token</button>
      </form>
      {response && (
        <div>
          <p>API Response: {JSON.stringify(response.response.data)}</p>
        </div>
      )}
    </div>
  );
};

export default AuthTokenForm;