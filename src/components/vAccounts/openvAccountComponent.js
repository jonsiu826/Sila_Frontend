import React, { useState } from 'react';
import api from '../../routes/vAccounts/openvAccountApi';

const OpenvAccountForm = () => {
  const [userHandle, setUserHandle] = useState('');
  const [virtualAccountName, setVirtualAccountName] = useState('');
  const [achCreditEnabled, setAchCreditEnabled] = useState('');
  const [achDebitEnabled, setAchDebitEnabled] = useState('');
  const [response, setResponse] = useState(null);

  const handleInputChange = (event) => {
    setUserHandle(event.target.value);
  };

  const handleOpenvAccount = async (event) => {
    event.preventDefault();

    try {
      console.log({ userHandle, virtualAccountName, achCreditEnabled, achDebitEnabled})
      const response = await api.openVirtualAccount({ userHandle, virtualAccountName, achCreditEnabled, achDebitEnabled});
      setResponse({ userHandle, response });
    } catch (error) {
      console.error('Error linking account:', error);
    }
  };

  return (
    <div>
      <h3><a href="https://docs.silamoney.com/docs/open_virtual_account" target="_blank">Open Virtual Account</a></h3>   
      <form onSubmit={handleOpenvAccount}>
        <input 
          type="text" 
          placeholder="user handle"
          value={userHandle} 
          onChange={handleInputChange} />
        <input
          type="text"
          placeholder="virtual account name"
          value={virtualAccountName}
          onChange={(e) => setVirtualAccountName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Set ACH Credit"
          value={achCreditEnabled}
          onChange={(e) => setAchCreditEnabled(e.target.value)}
        />
        <input
          type="text"
          placeholder="Set ACH Debit"
          value={achDebitEnabled}
          onChange={(e) => setAchDebitEnabled(e.target.value)}
        />
        <button type="submit">Open Virtual Account</button>
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

export default OpenvAccountForm;