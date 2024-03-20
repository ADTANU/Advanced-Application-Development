import { Link } from 'react-router-dom';
import '../assets/css/navbar.css'; // Import your custom CSS file

const NavigationBar = ({ isLoggedIn }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const logout = () => {
    // Simulate logout (you can replace this with actual logout logic)
    localStorage.removeItem('isLoggedIn');
    window.location.reload(); // Reload the page after logout
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>PartyPoppers</h1>
      </div>
      <ul className="menu">
        {/* Your navigation links */}
        <li onClick={() => scrollToSection('welcome-section')}>Home</li>
        <li onClick={() => scrollToSection('events-section')}>Events</li>
        <li onClick={() => scrollToSection('about-section')}>About Us</li>
        <li onClick={() => scrollToSection('contact-section')}>Contact Us</li>
        <Link to="/cart" style={{ textDecoration: 'none' , marginTop:'0px'}}>
          <li>Cart</li>
        </Link>

      </ul>
      <div className="welcome-user">
        {isLoggedIn ? (
          <p>Welcome, User! <button onClick={logout} className="login-button"style={{
            width:"100px",height:"50px",backgroundColor:"#a36513"
          }}>Logout</button></p>
        ) : (
          <Link to="/login">
            <button className="login-button" style={{
              width:"100px",height:"50px",backgroundColor:"#a36513",textDecoration:"none"
            }}>
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;