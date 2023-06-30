import React from 'react';
//import ApiComponent from './ApiComponent';
import CheckHandleForm from './components/checkHandleComponent';
import RegisterComponent from './components/registerComponent';
import CheckKycForm from './components/requestKycComponent';

function App() {
  return (
    <div>
      <h1>SILA FRONTEND</h1>
      <CheckHandleForm />
      <RegisterComponent />
      <CheckKycForm />
    </div>
  );
}

export default App;

