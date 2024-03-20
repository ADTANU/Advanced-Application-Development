
import '../assets/css/contactPage.css'; // Import your custom CSS file
import contactImage from "../assets/images/contact.jpg";
const ContactUsPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-image-container">
        <img src={contactImage} alt="Contact Image" />
      </div>
      <div className="contact-form-container">
        <h1 className="contact-heading">Contact Us</h1>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="contact-input" />
          <input type="email" placeholder="Your Email" className="contact-input" />
          <textarea placeholder="Your Message" className="contact-textarea"></textarea>
          <button className="contact-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
