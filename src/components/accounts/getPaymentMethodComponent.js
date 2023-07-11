import React, { useState } from 'react';
import api from '../../routes/accounts/getPaymentMethodApis';

const GetPaymentMethodForm = () => {
  const [userHandle, setUserHandle] = useState('');
  const [response, setResponse] = useState(null);

  const handleInputChange = (event) => {
    setUserHandle(event.target.value);
  };

  const handleGetPaymentMethod = async (event) => {
    event.preventDefault();

    try {
      const response = await api.getPaymentMethods({ userHandle });
      setResponse({ userHandle, response });
    } catch (error) {
      console.error('Error requesting kyc:', error);
    }
  };

  return (
    <div>
      <h3>Get Payment Method KYC</h3>  
      <form onSubmit={handleGetPaymentMethod}>
        <input type="text" value={userHandle} onChange={handleInputChange} />
        <button type="submit">Get Payment Method</button>
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

export default GetPaymentMethodForm;