import React, { useState } from 'react';
import api from '../../routes/vAccounts/getvAccountsApi';

const GetvAccountsForm = () => {
  const [userHandle, setUserHandle] = useState('');
  const [response, setResponse] = useState(null);

  const handleInputChange = (event) => {
    setUserHandle(event.target.value);
  };

  const handlegetvAccounts = async (event) => {
    event.preventDefault();

    try {
      const response = await api.getVirtualAccounts({ userHandle});
      setResponse({ userHandle, response });
    } catch (error) {
      console.error('Error getting virtual accounts:', error);
    }
  };

  return (
    <div>
      <h3><a href="https://docs.silamoney.com/docs/get_virtual_accounts" target="_blank">Get Virtual Accounts</a></h3>   
      <form onSubmit={handlegetvAccounts}>
        <input 
          type="text" 
          placeholder="user handle"
          value={userHandle} 
          onChange={handleInputChange} />
        <button type="submit">Get Virtual Accounts</button>
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

export default GetvAccountsForm;