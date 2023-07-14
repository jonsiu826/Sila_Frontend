import React, { useState } from 'react';
import api from '../routes/registerApi';


function RegisterForm() {
    // Define state variables to store form input values
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [streetAddress1, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');
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
 
    const formData = {
    
        address: {
          address_alias: "Home",
          street_address_1: streetAddress1,
          city: city,
          state: state,
          country: country,
          postal_code: postalCode,
        },
        identity: {
          identity_alias: "SSN",
          identity_value: identityValue,
        },
        contact: {
          phone: phone,
          contact_alias: '',
          email: email,
        },
        entity: {
          birthdate: birthdate,
          entity_name: entityName,
          first_name: firstName,
          last_name: lastName,
          relationship: 'user',
        },
    }
  

  
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
      <h3><a href="https://docs.silamoney.com/docs/register" target="_blank">Register</a></h3>  
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
          placeholder="entity name"
          value={entityName}
          onChange={(e) => setEntityName(e.target.value)}
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
          placeholder="SSN#"
          value={identityValue}
          onChange={(e) => setIdentityValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="birthdate ex 1900-09-09"
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
            <p>API Response: <pre>{JSON.stringify(response.response.data, null, 2)}</pre></p>
          </div>
      )}
      </div>
    );
  }
  
  export default RegisterForm;
  
  