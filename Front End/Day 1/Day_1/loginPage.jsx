import { Link } from 'react-router-dom';
import '../assets/css/loginPage.css'; // Import the CSS file

function LoginForm() {
  return (
    <div className="login-container">
      <h1 className="login-title">LOGIN!</h1>
      <div className="login-screen">
        <div className="login-screen__content">
          <form className="login-form">
            <div className="login-form__field">
              <input type="text" className="login-form__input" placeholder="User name / Email" />
            </div>
            <div className="login-form__field">
              <input type="password" className="login-form__input" placeholder="Password" />
            </div>
            <button className="login-button login-form__submit">
              <Link to="/home"><p className="login-button__text">Log In Now</p></Link>
            </button>
          </form>
        </div>
          <p className="create-account-link">
            Don't have an account? <Link to="/signup">Create one</Link>
          </p>
        <div className="login-screen__background">
          <span className="login-screen__background__shape login-screen__background__shape4"></span>
          <span className="login-screen__background__shape login-screen__background__shape3"></span>
          <span className="login-screen__background__shape login-screen__background__shape2"></span>
          <span className="login-screen__background__shape login-screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
