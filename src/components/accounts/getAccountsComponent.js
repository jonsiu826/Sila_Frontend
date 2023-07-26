import React, { useState } from 'react';
import api from '../../routes/accounts/getAccountsApi';

const GetAccountsForm = () => {
  const [userHandle, setUserHandle] = useState('');
  const [response, setResponse] = useState(null);

  const handleInputChange = (event) => {
    setUserHandle(event.target.value);
  };

  const handleGetAccounts = async (event) => {
    event.preventDefault();

    try {
      const response = await api.getAccounts({ userHandle });
      setResponse({ userHandle, response });
    } catch (error) {
      console.error('Error getting Accounts:', error);
    }
  };

  return (
    <div>
      <h3><a href="https://docs.silamoney.com/docs/get_accounts" target="_blank">Get Accounts</a></h3>   
      <form onSubmit={handleGetAccounts}>
        <input type="text" placeholder='userhandle' value={userHandle} onChange={handleInputChange} />
        <button type="submit">Get Accounts</button>
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

export default GetAccountsForm;