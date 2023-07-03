import React, { useState } from 'react';
import api from '../routes/authTokenApi';

const AuthTokenForm = () => {
  const [userHandle, setUserHandle] = useState('');
  const [response, setResponse] = useState(null);

  const handleInputChange = (event) => {
    setUserHandle(event.target.value);
  };

  const handleCheckKyc = async (event) => {
    event.preventDefault();

    try {
      const response = await api.requestKYC({ userHandle });
      setResponse({ userHandle, response });
    } catch (error) {
      console.error('Error checking handle:', error);
    }
  };

  return (
    <div>
      <h3>Request KYC</h3>  
      <form onSubmit={handleCheckKyc}>
        <input type="text" value={userHandle} onChange={handleInputChange} />
        <button type="submit">Request KYC</button>
      </form>
      {response && (
        <div>
          <p>User Handle: {response.userHandle}</p>
          <p>API Response: {JSON.stringify(response.response.data)}</p>
        </div>
      )}
    </div>
  );
};

export default RequestKycForm;