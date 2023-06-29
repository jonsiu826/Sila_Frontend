import React, { useState } from 'react';
import api from '../routes/registerApi';


function RegisterForm() {
    // Define state variables to store form input values
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [addressAlias, setAddressAlias] = useState('');
    const [streetAddress1, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [identityAlias, setIdentityAlias] = useState('');
    const [identityValue, setIdentityValue] = useState('');
    const [entityName, setEntityName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [response, setResponse] = useState(null);


    // Add other form fields as needed
  
    // Define a function to handle form submission
    const handleRegisterSubmit = async (e) => {
      e.preventDefault();
  
      // Create a data object with the form input values
      const formData = {
        entity: {
          first_name: firstName,
          last_name: lastName,
          address_alias: addressAlias,
          street_address_1: streetAddress1,
          city: city,
          state: state,
          country: country,
          postal_code: postalCode,
          identity_alias: identityAlias,
          identity_value: identityValue,
          entity_name: entityName,
          birthdate: birthdate,
          email: email,
          phone: phone

          // Add other form fields to match the data structure in the API file
        },
      };
  
      // Make the API request
      try {
        const response = await api.register(formData);
        setResponse({response})
      } catch (error) {
        console.error('Error registering entity'); // Handle any errors that occur during the API request
      }
    };
  
    // Render the form
    return (
        <div>
      <h3>Register</h3>
      <form onSubmit={handleRegisterSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="address alias"
          value={addressAlias}
          onChange={(e) => setAddressAlias(e.target.value)}
        />
        <input
          type="text"
          placeholder="street address"
          value={streetAddress1}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="text"
          placeholder="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="text"
          placeholder="postal code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
       <input
          type="text"
          placeholder="SSN"
          value={identityAlias}
          onChange={(e) => setIdentityAlias(e.target.value)}
        />

        <input
          type="text"
          placeholder="Identity Value"
          value={identityValue}
          onChange={(e) => setIdentityValue(e.target.value)}
        />

        <input
          type="text"
          placeholder="entity name"
          value={entityName}
          onChange={(e) => setEntityName(e.target.value)}
        />
        <input
          type="text"
          placeholder="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {response &&(
          <div>
              <p>API Response: {JSON.stringify(response.response.data)}</p>
          </div>
      )}
      </div>
    );
  }
  
  export default RegisterForm;
  
  