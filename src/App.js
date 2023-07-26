import React from 'react';
//import ApiComponent from './ApiComponent';
import CheckHandleForm from './components/checkHandleComponent';
import RegisterComponent from './components/registerComponent';
import CheckKycForm from './components/checkKycComponent';
import RequestKycForm from './components/requestKycComponent';
import AuthTokenForm from './components/authTokenComponent';
import IssueSilaForm from './components/transactions/issueSilaComponent';
import TransferSilaForm from './components/transactions/transferSilaComponent';
import RedeemSilaForm from './components/transactions/redeemSilaComponent';
import GetPaymentMethodForm from './components/accounts/getPaymentMethodComponent';
import LinkAccountForm from './components/accounts/linkAccountComponent';
import GetAccountsForm from './components/accounts/getAccountsComponent';

function App() {
  return (
    <div>
      <h1>SILA FRONTEND</h1>
      <AuthTokenForm />
      <CheckHandleForm />
      <RegisterComponent />
      <RequestKycForm />
      <CheckKycForm />
      <LinkAccountForm />
      <GetAccountsForm />
      <IssueSilaForm />
      <TransferSilaForm />
      <RedeemSilaForm />
      <GetPaymentMethodForm />
    </div>
  );
}

export default App;

