import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = ({ onLogin }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const newUser = { fullName, email, password };

    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        alert("User Signed Up, You Will Be Redirected To Dashboard")
        onLogin(); // Authenticate user
        navigate('/dashboard'); // Redirect to Dashboard
      } else {
        alert("Error Signing You Up ,please Try Later")
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name* :</label>
          <input 
            type="text" 
            id="fullName" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            required 
          />
          <label htmlFor="email">Email* :</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <label htmlFor="password">Password* :</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Sign Up</button>
          <br></br>
          <br></br>
          <h5>If You already have an account, please <a href='/SignIn'>Login here</a></h5>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
