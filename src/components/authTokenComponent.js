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
      <h3><a href="https://docs.silamoney.com/docs/auth_token" target="_blank">Auth Token Generator</a></h3>  
      <h4>Add this token to your .env file</h4>  
      <form onSubmit={handleAuthToken}>
        <button type="submit">Get Auth Token</button>
      </form>
      {response && (
        <div>
           <p>API Response: <pre>{JSON.stringify(response.response.data, null, 2)}</pre></p>
        </div>
      )}
    </div>
  );
};

export default AuthTokenForm;