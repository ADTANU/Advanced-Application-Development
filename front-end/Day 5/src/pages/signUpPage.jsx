import { Link } from 'react-router-dom';
import '../assets/css/signUpPage.css'; // Import your custom CSS file

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="background-imagesign"></div>
      <div className="signup-form">
        <p className="welcome-message">Let us turn your event dreams into reality!</p>
        <h2 className="signup-heading">Sign Up</h2>
        <form className="signup-form-fields">
          <input type="text" placeholder="Username" className="signup-input" />
          <input type="email" placeholder="Email" className="signup-input" />
          <input type="password" placeholder="Password" className="signup-input" />
          <input type="password" placeholder="Confirm Password" className="signup-input" />
          <input type="tel" placeholder="Mobile Number" className="signup-input" />
          <select className="signup-input" id="role">
          <option value="" disabled selected>Select Role</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
         <Link to="/login"> <button type="submit" className="signup-button">Sign Up</button></Link>
        </form>
        <p className="login-link">Been here before?<Link to="/login"style={{ color: '#bf7616',fontSize:'x-large',textDecorationLine:'none' }}>Log in</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
