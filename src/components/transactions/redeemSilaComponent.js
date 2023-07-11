import React, { useState } from 'react';
import api from '../../routes/transactions/redeemSilaApi';

const RedeemSilaForm = () => {
  const [userHandle, setUserHandle] = useState('');
  const [amount, setAmount] = useState('');
  const [sourceId, setSourceId] = useState('')
  const [destinationId, setDestinationId] = useState('')
  const [response, setResponse] = useState(null);


  const handleInputChange = (event) => {
    setUserHandle(event.target.value);
  };

  const handleRequestRedeemSila = async (event) => {
    event.preventDefault();
    
    try {
      const response = await api.redeemSila({userHandle, amount, destinationId, sourceId});
      console.log('API Response:', response); // Add this line for debugging purposes
      setResponse({ userHandle, response });
    } catch (error) {
      console.error('Error submitting /redeem_sila request:', error);
    }
  };
  

  return (
    <div>
      <h3>Redeem Sila</h3>  
      <form onSubmit={handleRequestRedeemSila}>
      <input 
         type="text" 
         placeholder='userhandle'
         value={userHandle} 
         onChange={handleInputChange}
        />
        <input
          type="integer"
          placeholder="Sila Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
         <input
          type="integer"
          placeholder="Source Id"
          value={sourceId}
          onChange={(e) => setSourceId(e.target.value)}
        />
        <input
          type="integer"
          placeholder="Destination Id"
          value={destinationId}
          onChange={(e) => setDestinationId(e.target.value)}
        />
        
         <button type="submit">Redeem Sila</button>
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

export default RedeemSilaForm;