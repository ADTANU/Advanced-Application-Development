import '../assets/css/footer.css'; // Import your custom CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container-footer">
        <div className="footer-cta pt-5 pb-5">
          <div className="cta-items">
            <div className="single-cta">
              <i className="fas fa-map-marker-alt"></i>
              <div className="cta-text">
                <h4>Find us</h4>
                <span>1010 Avenue, sw 54321, Coimbatore</span>
              </div>
            </div>
            <div className="single-cta">
              <i className="fas fa-phone"></i>
              <div className="cta-text">
                <h4>Call us</h4>
                <span>9876543210</span>
              </div>
            </div>
            <div className="single-cta">
              <i className="far fa-envelope-open"></i>
              <div className="cta-text">
                <h4>Mail us</h4>
                <span>EventEase@info.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container-footer">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2024, All Right Reserved EventEase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
