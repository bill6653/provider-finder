import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = event => setUsername(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);
  const handleRememberMeChange = event => setRememberMe(event.target.checked);

  const handleSubmit = event => {
    event.preventDefault();
    // Handle login logic here
    if (username === '' || password === '') {
      setErrorMessage('Please enter username and password.');
    } else {
      setErrorMessage('');
      // Login logic goes here
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-heading">
          <h2>Login</h2>
          <p>Welcome back! Please log in to your account.</p>
        </div>
        <form onSubmit={handleSubmit}>
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="form-control"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group form-check form-check-inline">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="form-check-input"
            />
            <label htmlFor="rememberMe" className="form-check-label">
              Remember me
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          <div className="register-link">
            <p>Don't have an account?</p>
            <Link to="/registration">Register now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
