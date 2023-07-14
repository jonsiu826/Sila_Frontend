import React, { useState } from 'react';
import api from '../../routes/transactions/transferSilaApi';

const TransferSilaForm = () => {
  const [userHandle, setUserHandle] = useState('');
  const [destinationHandle, setDestinationHandle] = useState('');
  const [amount, setAmount] = useState('');
  const [sourceId, setSourceId] = useState('')
  const [destinationId, setDestinationId] = useState('')
  const [response, setResponse] = useState(null);

  const handleRequestTransferSila = async (event) => {
    event.preventDefault();
    
    try {
      const response = await api.transferSila({userHandle, destinationHandle, amount, destinationId, sourceId});
      console.log('API Response:', response); // Add this line for debugging purposes
      setResponse({ userHandle, response });
    } catch (error) {
      console.error('Error submitting /transfer_sila request:', error);
    }
  };
  

  return (
    <div>
      <h3><a href="https://docs.silamoney.com/docs/transfer_sila" target="_blank">Transfer Sila </a></h3>   
      <form onSubmit={handleRequestTransferSila}>
      <input 
         type="text" 
         placeholder='Sending Userhandle'
         value={userHandle} 
         onChange={(e) => setUserHandle(e.target.value)}
        />
        <input 
         type="text" 
         placeholder='Receiving Userhandle'
         value={destinationHandle} 
         onChange={(e) => setDestinationHandle(e.target.value)}
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
        <button type="submit">Transfer Sila</button>
      </form>
      {response && (
        <div>
          <p>Sending User Handle: {response.userHandle}</p>
          <p>Receiving User Handle: {destinationHandle}</p>
          <p>API Response: <pre>{JSON.stringify(response.response.data, null, 2)}</pre></p>
        </div>
      )}
    </div>
  );
};

export default TransferSilaForm;