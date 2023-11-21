import React, { useState } from 'react';

const SignupPage = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // Added state for email
  const [password, setPassword] = useState('');

 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Form submitted with data:', { username, email, password });
    // Optionally, you can reset the form fields and close the SignupPage

    setEmail('');
    setPassword('');
    onClose();
  };

  return (
    <div className="sign-up-page">
      <div className="sign-up-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
        
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="password">Password:</label>
          <input 
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
