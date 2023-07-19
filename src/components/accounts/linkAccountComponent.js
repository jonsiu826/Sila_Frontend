import React, { useState } from 'react';
import api from '../../routes/accounts/linkAccountApi';

const LinkAccountForm = () => {
  const [userHandle, setUserHandle] = useState('');
  const [providerToken, setProviderToken] = useState('');
  const [accountName, setAccountName] = useState('');
  const [providerTokenType, setProviderTokenType] = useState('');
  const [provider, setProvider] = useState('');
  const [response, setResponse] = useState(null);

  const handleInputChange = (event) => {
    setUserHandle(event.target.value);
  };

  const handleLinkAccount = async (event) => {
    event.preventDefault();

    try {
      console.log('Request Data:', { userHandle, providerToken, providerTokenType, accountName, provider });
      const response = await api.linkAccount({ userHandle, providerToken, providerTokenType, accountName, provider});
      setResponse({ userHandle, response });
    } catch (error) {
      console.error('Error linking account:', error);
    }
  };

  return (
    <div>
      <h3><a href="https://docs.silamoney.com/docs/link_account" target="_blank">Link Account</a></h3>   
      <form onSubmit={handleLinkAccount}>
        <input 
          type="text" 
          placeholder="user handle"
          value={userHandle} 
          onChange={handleInputChange} />
        <input
          type="text"
          placeholder="account name"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Provider token"
          value={providerToken}
          onChange={(e) => setProviderToken(e.target.value)}
        />
        <input
          type="text"
          placeholder="provider"
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
        />
          <input
          type="text"
          placeholder="Processor"
          value={providerTokenType}
          onChange={(e) => setProviderTokenType(e.target.value)}
        />
        <button type="submit">Link Account</button>
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

export default LinkAccountForm;