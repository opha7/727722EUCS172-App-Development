import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!email) {
      formErrors.email = 'Email is required';
      valid = false;
    } else if (!validateEmail(email)) {
      formErrors.email = 'Invalid email format';
      valid = false;
    }

    if (!password) {
      formErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Login Successful');
      navigate('/login-success');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: 'green' }}>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: 'green' }}>{errors.password}</p>}
      </div>
      <div className="button-container">
        <button type="submit">Login</button>
      </div>
      <div>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </form>
  );
};

export default Login;
