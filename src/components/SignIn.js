import React, { useState } from 'react';
import './SignIn.css';

const SignIn = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:5000/users') 
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        const user = data.find(user => user.email === email && user.password === password);
        if (user) {
          onLogin(); 
        } else {
          alert('Invalid credentials, Please Try Again');
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  return (
    <div className="signin">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Sign In</button>
        <br></br>
        <br></br>
        <h5>If you don't have an account, please <a href='/signup'>Create One Here</a></h5>
      </form>
    </div>
  );
};

export default SignIn;
