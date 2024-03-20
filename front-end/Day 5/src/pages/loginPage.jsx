import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/loginPage.css'; // Import your custom CSS file

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Simulate successful login (you can replace this with actual authentication logic)
    localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true); // Update the isLoggedIn state
    
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="login-form">
        <p className="welcome-back">Happy to have you back!</p>
        <h2 className="login-heading" style={{ fontWeight: 'bolder' }}>Login</h2>

        <form className="login-form-fields" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" className="login-input" required/>
          <input type="password" placeholder="Password" className="login-input"required />
          <button type="submit" className="login-button" >Submit</button>
        </form>
        <div className="login-links">
          <p className="forgot-password">Forgot Password?</p>
          <p className="signup-link">New to our Platform? <Link to="/signup" style={{ color: '#976729', textDecoration:'none' }}>Register here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
