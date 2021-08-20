import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Form() {
 
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
   
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'messageBody') {
      setMessageBody(inputValue);
    } else {}
  };

  const handleFormSubmit = (e) => {
    
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
     
      return;
    
    }
    alert(`Your message has been submitted.`);


    setName('');
    setMessageBody('');
    setEmail('');
  };

  return (
    <div>
      <p>Please fill out the form below and we will reply back shortly.</p>
      <form className="form">
        <input className="input-group w-50"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <br></br>
        <input className="input-group w-50"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <br></br>
        <textarea className="input-group"
          value={messageBody}
          name="messageBody"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <br></br>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
