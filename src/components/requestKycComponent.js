import React, { useState } from 'react';
import api from '../routes/requestKycApi';

const RequestKycForm = () => {
  const [userHandle, setUserHandle] = useState('');
  const [response, setResponse] = useState(null);

  const handleInputChange = (event) => {
    setUserHandle(event.target.value);
  };

  const handleRequestKyc = async (event) => {
    event.preventDefault();

    try {
      const response = await api.requestKYC({ userHandle });
      setResponse({ userHandle, response });
    } catch (error) {
      console.error('Error requesting kyc:', error);
    }
  };

  return (
    <div>
      <h3>Request KYC</h3>  
      <form onSubmit={handleRequestKyc}>
        <input type="text" value={userHandle} onChange={handleInputChange} />
        <button type="submit">Request KYC</button>
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

export default RequestKycForm;