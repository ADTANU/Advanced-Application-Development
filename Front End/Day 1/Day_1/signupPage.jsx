import { Link } from 'react-router-dom';
import '../assets/css/signupPage.css'; // Import the CSS file for signup page

function SignupForm() {
  return (
    <div className="signup-container">
      <h1 className="signup-title">SIGN UP!</h1>
      <div className="signup-screen">
        <div className="signup-screen__content">
          <form className="signup-form">
            <div className="signup-field">
              <input type="text" className="signup-input" placeholder="Full Name" />
            </div>
            <div className="signup-field">
              <input type="email" className="signup-input" placeholder="Email" />
            </div>
            <div className="signup-field">
              <input type="password" className="signup-input" placeholder="Password" />
            </div>
            <button className="signup-button signup-submit">
            <Link to="/login"><p className="signup-button__text">Sign Up Now</p></Link>
            </button>
          </form>
        </div>
        <p className="already-account-link">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        <div className="signup-screen__background">
          <span className="signup-screen__background__shape signup-screen__background__shape4"></span>
          <span className="signup-screen__background__shape signup-screen__background__shape3"></span>
          <span className="signup-screen__background__shape signup-screen__background__shape2"></span>
          <span className="signup-screen__background__shape signup-screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
