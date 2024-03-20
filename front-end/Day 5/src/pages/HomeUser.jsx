import { useEffect } from 'react';
import NavigationBar from '../components/navbar';
import '../assets/css/landingPage.css'; // Import your custom CSS file
import eventImage from '../assets/images/landback.jpg'; // Replace with your event image path
import aboutImage from '../assets/images/about back1.jpg'
import welcomeImage from '../assets/images/welsome.jpg'
import ContactUsPage from '../components/contactPage';
import contactImage from '../assets/images/about.jpg'
import wedding from '../assets/images/Photo from Simran and Aditya Wedding.jpeg.jpg'
import birthday from '../assets/images/09aa2032-d23f-483a-ad4d-32b6b10219d1.jpeg.jpg'
import corporate from '../assets/images/Event Planning - professional event management & total event solutions.jpeg.jpg'
import getTogether from '../assets/images/Colors!!!.jpeg.jpg'
import Footer from '../components/footer';
import ServiceCards from '../components/ServiceCards';

const HomeUser = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const parallaxElement = document.querySelector('.event-image');
      parallaxElement.style.transform = `translateY(-${scrollTop * 0.5}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <NavigationBar />
      <div  className="landing-container">
        <img src={eventImage} alt="Event Setup" className="event-image" />
      </div>
      <div className="welcome-overview">
  <img src={welcomeImage} alt="Birthday Celebration" />
  <div id="welcome-section" className="welcome-overview-content">
    <h2>Welcome to EventEase, where every celebration becomes an unforgettable masterpiece!!!!</h2>
    <p>Step into a world of enchantment with EventEase, where dreams unfold and moments become everlasting memories. From the grandeur of weddings to the jubilance of birthdays, from the sophistication of corporate events to the intimacy of get-togethers, we weave magic into every occasion. Immerse yourself in luxury without compromise, as we curate bespoke experiences tailored to your desires and budget. With meticulous attention to detail and a passion for perfection, EventEase transforms the ordinary into the extraordinary, ensuring that every event is an unforgettable masterpiece. Join us on a journey where imagination knows no bounds and celebrations reach new heights. Welcome to EventEase, where every moment sparkles with possibility.</p>
  </div>
</div>

      <div id="events-section" className="content">
       
        <section className="gallery">
          <h2 className='gallery-text'>Available Events</h2>
          <div className="box-container">
        <div className="box">
          <img src={wedding} alt="" />
          <h3 className="title">WEDDING</h3>
          
        </div>
        <div className="box">
          <img src={birthday} alt="" />
          <h3 className="title">BIRTHDAY PARTY</h3>
          
        </div>
        <div className="box">
          <img src={corporate}alt="" />
          <h3 className="title">CORPORATE EVENTS</h3>
          
        </div>
        <div className="box">
          <img src={getTogether} alt="" />
          <h3 className="title">GET TOGETHER</h3>
          
        </div>
      

        </div>
        
        <h2 className='gallery-text'>Available Services</h2>
        <ServiceCards/>         
        </section>
        <section id="about-section" className="about">
        <div className="about-image">
  <img src={aboutImage} alt="About Us" />
  <div className="about-text">
    <h2>About Us</h2>
  </div>
<p>At EventEase, our passion lies in orchestrating unforgettable events that surpass mere celebrations, but rather become cherished memories etched in the hearts of our clients and their guests. With a dedicated focus on weddings, corporate gatherings, lively birthday parties, and intimate get-togethers, we offer a diverse array of services meticulously tailored to meet every need and desire.

From the moment you entrust us with your event, our team of seasoned professionals works tirelessly to transform your vision into reality. Whether it's transforming a blank canvas into a breathtaking venue adorned with elegant decorations, designing sumptuous menus that tantalize the taste buds, or capturing the essence of every moment through stunning photography, we leave no stone unturned in ensuring that every aspect of your event exceeds expectations.

But what truly sets us apart is our unwavering commitment to providing unparalleled luxury without compromising on affordability. We understand that each event is as unique as the individuals it celebrates, which is why we offer customizable packages tailored to suit your preferences and budget.

At EventEase, we don't just plan events; we create unforgettable experiences that resonate long after the last guest has departed. With our meticulous attention to detail, passion for perfection, and dedication to exceeding expectations, we invite you to embark on a journey with us to create moments that will be cherished for a lifetime.</p></div>

        </section>

        <section id="contact-section" className="contact">
          <div className="aboutc-image">
  <img src={contactImage} alt="Contact Us" />
  <div className="aboutc-text">
    <h2>Contact Us</h2>
  </div>



</div>

          <ContactUsPage/>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default HomeUser;
