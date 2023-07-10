import React, { useState } from 'react';
import api from '../../routes/transactions/issueSilaApi';

const IssueSilaForm = () => {
  const [userHandle, setUserHandle] = useState('');
  const [amount, setAmount] = useState('');
  const [accountName, setAccountName] = useState('')
  const [response, setResponse] = useState(null);


  const handleInputChange = (event) => {
    setUserHandle(event.target.value);
  };

  const handleRequestIssueSila = async (event) => {
    event.preventDefault();
    
    try {
      const response = await api.issueSila({userHandle, amount, accountName});
      console.log('API Response:', response); // Add this line for debugging purposes
      setResponse({ userHandle, response });
    } catch (error) {
      console.error('Error submitting /issue_sila request:', error);
    }
  };
  

  return (
    <div>
      <h3>Issue Sila</h3>  
      <form onSubmit={handleRequestIssueSila}>
      <input 
         type="text" 
         placeholder='userhandle'
         value={userHandle} 
         onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="account name"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
        />
        <input
          type="integer"
          placeholder="Sila Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Issue Sila</button>
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

export default IssueSilaForm;